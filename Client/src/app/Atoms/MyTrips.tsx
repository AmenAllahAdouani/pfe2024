"use client"

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import DeleteIcon from '@mui/icons-material/Delete';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import { auth } from '@/firebase';

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
}

const MyTrips: React.FC = () => {
    const [trips, setTrips] = useState<Trip[]>([]);
    
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

    const handleDeleteTrips = async (index: number) => {
        try {
          await axios.delete(`http://localhost:3001/api/trips/${trips[index].id}`);
        } catch (error) {
          console.error('Error deleting trip:', error);
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
                                <Button variant="outline" className="ml-1 p-2 text-amber-500">
                                    <TravelExploreIcon />
                                </Button>
                                <Button variant="outline" className="ml-1 p-2 text-amber-500" onClick={() => handleDeleteTrips(index)}>
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
        </div>
    );
}

export default MyTrips;


