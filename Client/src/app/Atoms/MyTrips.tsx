"use client";

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import DeleteIcon from '@mui/icons-material/Delete';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import { auth } from '@/firebase';
import Modal from './TravelExplore';

interface Trip {
    id: string;
    Destination: {
        name: string;
    };
    Duration: {
        from: string;
        to: string;
    };
    Budget: string;
    Situation: string;
    imageSrc: string;
}

const MyTrips: React.FC = () => {
    const [trips, setTrips] = useState<Trip[]>([]);
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [modalImageSrc, setModalImageSrc] = useState<string>('');
    const [modalInfoContent, setModalInfoContent] = useState<React.ReactNode>(null);
    const [modalDaysContent, setModalDaysContent] = useState<React.ReactNode>(null);

    useEffect(() => {
        const fetchTrips = async () => {
            const user = auth.currentUser;
            if (!user) {
                console.error('No user is currently signed in.');
                return;
            }
            try {
                const uid = user.uid;
                const response = await axios.get<Trip[]>(`http://localhost:3001/api/trips/${uid}`);
                console.log('Fetched trips:', response.data);
                setTrips(response.data);
            } catch (error) {
                console.error('Failed to fetch trips:', error);
            }
        };

        fetchTrips();
    }, []);

    // Function to format dates
    const formatDate = (date?: string): string => {
        return date ? new Date(date).toLocaleDateString() : 'N/A';
    };

    const handleDeleteTrip = async (id: string) => {
        try {
            await axios.delete(`http://localhost:3001/api/trips/${id}`);
            setTrips(trips.filter(trip => trip.id !== id));
        } catch (error) {
            console.error('Error deleting trip:', error);
        }
    };

    const accessKey = "iI2yfYLptzSLsfdk134vS1InKO7_Tp58WixYDSBw45A";
    
    const handleExploreClick = async (trip: Trip) => {
        try {
            const response = await axios.get(`https://api.unsplash.com/search/photos`, {
                params: {
                    query: trip.Destination.name,
                    client_id: accessKey,
                    per_page: 1,
                }
            });

            const imageUrl = response.data.results[0]?.urls?.regular || '';

            setModalImageSrc(imageUrl);
            setModalInfoContent( 
                <div>
                    <p><strong>Destination:</strong> {trip.Destination.name}</p>
                    <p><strong>Budget:</strong> {trip.Budget}</p>
                    <p><strong>Situation:</strong> {trip.Situation}</p>
                </div>
            );
            setModalDaysContent(
                <div>
                    <p><strong>From:</strong> {formatDate(trip.Duration?.from)}</p>
                    <p><strong>To:</strong> {formatDate(trip.Duration?.to)}</p>
                </div>
            );
            setIsModalOpen(true);
        } catch (error) {
            console.error('Error fetching image from Unsplash:', error);
        }
    };

    return (
        <div>
            <Table>
                <TableCaption>List of Trips</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead>Destination</TableHead>
                        <TableHead>From</TableHead>
                        <TableHead>To</TableHead>
                        <TableHead>Budget</TableHead>
                        <TableHead>Situation</TableHead>
                        <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {trips.map((trip, index) => (
                        <TableRow
                            key={index}
                            className={trip.Situation === 'Valid' ? 'bg-green-200' : trip.Situation === 'Invalid' ? 'bg-red-200' : ''}
                        >
                            <TableCell>{trip.Destination.name}</TableCell>
                            <TableCell>{formatDate(trip.Duration?.from)}</TableCell>
                            <TableCell>{formatDate(trip.Duration?.to)}</TableCell>
                            <TableCell>{trip.Budget}</TableCell>
                            <TableCell>{trip.Situation}</TableCell>
                            <TableCell className="text-right">
                                <Button variant="outline" className="ml-1 p-2 text-gray-500" onClick={() => handleExploreClick(trip)}>
                                    <TravelExploreIcon />
                                </Button>
                                <Button variant="outline" className="ml-1 p-2 text-gray-500" onClick={() => handleDeleteTrip(trip.id)}>
                                    <DeleteIcon />
                                </Button>
                            </TableCell>
                        </TableRow>
                    ))}
                    {trips.length === 0 && (
                        <TableRow>
                            <TableCell colSpan={6}>No trips available.</TableCell>
                        </TableRow>
                    )}
                </TableBody>
            </Table>
            <Modal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                imageSrc={modalImageSrc}
                infoContent={modalInfoContent}
                daysContent={modalDaysContent}
            />
        </div>
    );
}

export default MyTrips;
