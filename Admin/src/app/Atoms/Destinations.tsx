"use client"

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import Modal from './Modal';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';

interface Destination {
  _id?: string;
  name: string;
  currency?: string;
  timezone?: string;
  language?: string;
  transport?: string;
}

const Destinations: React.FC = () => {
  const [isAddModalOpen, setAddModalOpen] = useState<boolean>(false);
  const [destinations, setDestinations] = useState<Destination[]>([]);
  const [currentDestination, setCurrentDestination] = useState<Destination>({
    name: '',
    currency: '',
    timezone: '',
    language: '',
    transport: '',
  });

  useEffect(() => {
    fetchDestinations();
  }, []);

  const fetchDestinations = async () => {
    try {
      const response = await axios.get<Destination[]>('http://localhost:3001/api/destination');
      setDestinations(response.data);
    } catch (error) {
      console.error('Error fetching destinations:', error);
    }
  };

  const resetForm = () => {
    setCurrentDestination({
      name: '',
      currency: '',
      timezone: '',
      language: '',
      transport: '',
    });
  };

  const openAddModal = () => setAddModalOpen(true);
  const closeAddModal = () => {
    setAddModalOpen(false);
    resetForm();
  };

  const handleAddDestination = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const response = await axios.post<Destination>('http://localhost:3001/api/destination', {
        name: currentDestination.name,
        currency: currentDestination.currency,
        timezone: currentDestination.timezone,
        language: currentDestination.language,
        transport: currentDestination.transport
      });
      fetchDestinations();
      closeAddModal();
    } catch (error) {
      console.error('Error adding destination:', error);
    }
  };

  const handleDeleteDestination = async (index: number) => {
    try {
      await axios.delete(`http://localhost:3001/api/destination/${destinations[index]._id}`);
      fetchDestinations();
    } catch (error) {
      console.error('Error deleting destination:', error);
    }
  };

  return (
    <div>
      <div className="my-4 ml-1">
        <Button className="bg-amber-500 text-white" onClick={openAddModal}>
          <AddIcon /> Add destination
        </Button>
      </div>
      <Modal isOpen={isAddModalOpen} closeModal={closeAddModal}>
        <form onSubmit={handleAddDestination}>
          <h2>Add New Destination</h2>
          <label>Destination Name:</label>
          <input type="text" placeholder="Enter destination" value={currentDestination.name} onChange={(e) => setCurrentDestination({ ...currentDestination, name: e.target.value })} />
          <label>Currency:</label>
          <input type="text" placeholder="Enter currency" value={currentDestination.currency} onChange={(e) => setCurrentDestination({ ...currentDestination, currency: e.target.value })} />
          <label>Timezone:</label>
          <input type="text" placeholder="Enter Timezone" value={currentDestination.timezone} onChange={(e) => setCurrentDestination({ ...currentDestination, timezone: e.target.value })} />
          <label>Language:</label>
          <input type="text" placeholder="Enter Language" value={currentDestination.language} onChange={(e) => setCurrentDestination({ ...currentDestination, language: e.target.value })} />
          <label>Transport:</label>
          <input type="text" placeholder="Enter Transport" value={currentDestination.transport} onChange={(e) => setCurrentDestination({ ...currentDestination, transport: e.target.value })} />
          <button type="submit">Submit</button>
        </form>
      </Modal>

      <Table>
        <TableCaption className="text-amber-500">List of Destinations</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="text-amber-500">Destination</TableHead>
            <TableHead className="text-amber-500">Currency</TableHead>
            <TableHead className="text-amber-500">Timezone</TableHead>
            <TableHead className="text-amber-500">Language</TableHead>
            <TableHead className="text-amber-500">Transport</TableHead>
            <TableHead className="text-right text-amber-500">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {destinations.map((destination, index) => (
            <TableRow key={index}>
              <TableCell>{destination.name}</TableCell>
              <TableCell>{destination.currency}</TableCell>
              <TableCell>{destination.timezone}</TableCell>
              <TableCell>{destination.language}</TableCell>
              <TableCell>{destination.transport}</TableCell>
              <TableCell className="text-right">
                <Button variant="outline" className="ml-1 p-2 text-amber-500" onClick={() => handleDeleteDestination(index)}>
                  <DeleteIcon />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default Destinations;
