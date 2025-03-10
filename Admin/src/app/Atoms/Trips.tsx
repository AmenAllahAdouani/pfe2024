"use client"

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import UnpublishedIcon from '@mui/icons-material/Unpublished';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';


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
}

const Trips: React.FC = () => {
  const [trips, setTrips] = useState<Trip[]>([]);

  const handlaValidationTrip = async (tripId: string) => {
    console.log(tripId);
    try {
      const response = await axios.patch(`http://localhost:3001/api/trips/update/${tripId}`, {
        Situation: 'Valid trip'
      });
      console.log("Trip validated:", response.data);
    } catch (error) {
      console.error("Failed to validate this trip:", error);
      alert('Failed to validate this trip. Please try again.');
    }
  }
  
  const handlaRefuseTrip = async (tripId: string) => {
    try {
      const response = await axios.patch(`http://localhost:3001/api/trips/update/${tripId}`, {
        Situation: 'Invalid trip'
      });
      console.log("Trip refused:", response.data);
    } catch (error) {
      console.error("Failed to refuse this trip:", error);
      alert('Failed to refuse this trip. Please try again.');
    }
  }

  useEffect(() => {
    const fetchTrips = async () => {
      try {
        const response = await axios.get<Trip[]>('http://localhost:3001/api/trips');
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
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {trips.map((trip, index) => (
            <TableRow key={index}>
              <TableCell>{trip.Destination.name}</TableCell>
              <TableCell>{formatDate(trip.Duration?.from)}</TableCell>
              <TableCell>{formatDate(trip.Duration?.to)}</TableCell>
              <TableCell>{trip.Budget}</TableCell>
              <TableCell className="text-right">
                <Button variant="outline" className="ml-1 p-2" onClick={() =>{handlaValidationTrip(trip._id)}}>
                  <CheckCircleIcon />
                </Button>
                <Button variant="outline" className="ml-1 p-2" onClick={() => handlaRefuseTrip(trip._id)}>
                  <UnpublishedIcon />
                </Button>
              </TableCell>
            </TableRow>
          ))}
          {trips.length === 0 && (
            <TableRow>
              <TableCell colSpan={5}>No trips available.</TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
};

export default Trips;

