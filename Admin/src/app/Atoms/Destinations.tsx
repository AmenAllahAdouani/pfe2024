"use client"

import React, { useState } from 'react';
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import Modal from './Modal';
import AddIcon from '@mui/icons-material/Add';
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';
import DeleteIcon from '@mui/icons-material/Delete';

interface Destination {
  name: string;
  currency?: string;
  timezone?: string;
  language?: string;
  transport?: string;
}

const Destinations: React.FC = () => {
  const [isAddModalOpen, setAddModalOpen] = useState<boolean>(false);
  const [isUpdateModalOpen, setUpdateModalOpen] = useState<boolean>(false);
  const [destinations, setDestinations] = useState<Destination[]>([]);
  const [currentDestination, setCurrentDestination] = useState<Destination>({
    name: '',
    currency: '',
    timezone: '',
    language: '',
    transport: '',
  });
  const [editIndex, setEditIndex] = useState<number | null>(null);

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

  const openUpdateModal = (index: number) => {
    setEditIndex(index);
    setCurrentDestination({ ...destinations[index] });
    setUpdateModalOpen(true);
  };
  const closeUpdateModal = () => {
    setUpdateModalOpen(false);
    resetForm();
  };

  const handleAddDestination = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setDestinations([...destinations, currentDestination]);
    closeAddModal();
  };

  const handleUpdateDestination = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (editIndex !== null) {
      const updatedDestinations = [...destinations];
      updatedDestinations[editIndex] = currentDestination;
      setDestinations(updatedDestinations);
      closeUpdateModal();
    }
  };

  const handleDeleteDestination = (index: number) => {
    setDestinations(destinations.filter((_, idx) => idx !== index));
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
          {/* Form fields and handlers for adding a destination */}
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

      <Modal isOpen={isUpdateModalOpen} closeModal={closeUpdateModal}>
        <form onSubmit={handleUpdateDestination}>
          <h2>Update Destination</h2>
          {/* Form fields and handlers for updating a destination */}
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
          <button type="submit">Update</button>
        </form>
      </Modal>

      <Table>
        <TableCaption>List of Destinations</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Destination</TableHead>
            <TableHead>Currency</TableHead>
            <TableHead>Timezone</TableHead>
            <TableHead>Language</TableHead>
            <TableHead>Transport</TableHead>
            <TableHead className="text-right">Actions</TableHead>
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
                <Button variant="outline" className="ml-1 p-2" onClick={() => openUpdateModal(index)}>
                  <SettingsSuggestIcon />
                </Button>
                <Button variant="outline" className="ml-1 p-2" onClick={() => handleDeleteDestination(index)}>
                  <DeleteIcon />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

export default Destinations;
