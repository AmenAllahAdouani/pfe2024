"use client"

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import Modal from './Modal';

interface Host {
    _id?: string;
    Photo: string;
    Name: string;
    Expertise: string;
    Place: string;
}

const Hosts: React.FC = () => {
    const [isModalOpen, setModalOpen] = useState<boolean>(false);
    const [modalMode, setModalMode] = useState<'add' | 'edit'>('add');
    const [hosts, setHosts] = useState<Host[]>([]);
    const [currentHost, setCurrentHost] = useState<Host>({
        Photo: '',
        Name: '',
        Expertise: '',
        Place: '',
    });

    useEffect(() => {
        fetchHosts();
    }, []);

    const fetchHosts = async () => {
        try {
            const response = await axios.get<Host[]>('http://localhost:3001/api/host');
            setHosts(response.data);
        } catch (error) {
            console.error('Failed to fetch hosts:', error);
        }
    };

    const resetForm = () => {
        setCurrentHost({
            Photo: '',
            Name: '',
            Expertise: '',
            Place: '',
        });
    };

    const openModal = (mode: 'add' | 'edit', host?: Host) => {
        setModalMode(mode);
        if (mode === 'edit' && host) {
            setCurrentHost(host);
        } else {
            resetForm();
        }
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
        resetForm();
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {
            if (modalMode === 'add') {
                const response = await axios.post<Host>('http://localhost:3001/api/host', currentHost);
                setHosts([...hosts, response.data]);
            } else if (modalMode === 'edit' && currentHost._id) {
                const response = await axios.put<Host>(`http://localhost:3001/api/host/${currentHost._id}`, currentHost);
                // Update the host in the hosts array
                setHosts(hosts.map(host => host._id === currentHost._id ? response.data : host));
            } else {
                console.error('Host ID is missing.');
            }
            fetchHosts();
            // Close the modal after submitting
            closeModal();
        } catch (error) {
            console.error('Error handling host:', error);
        }
    };
    

    const handleDeleteHost = async (id: string) => {
        try {
            await axios.delete(`http://localhost:3001/api/host/${id}`);
            setHosts(hosts.filter(host => host._id !== id));
        } catch (error) {
            console.error('Error deleting host:', error);
        }
    };

    return (
        <div>
            <div className="my-4 ml-1">
                <Button className="bg-amber-500 text-white" onClick={() => openModal('add')}>
                    <AddIcon /> Add new host
                </Button>
            </div>
            <Modal isOpen={isModalOpen} closeModal={closeModal}>
                <form onSubmit={handleSubmit}>
                    <h2>{modalMode === 'add' ? 'Add New Host' : 'Edit Host'}</h2>
                    <label>Host Photo:</label>
                    <input id="photo" type="file" accept="image/*" />
                    <label>Host Name:</label>
                    <input type="text" placeholder="Enter name" value={currentHost.Name} onChange={(e) => setCurrentHost({ ...currentHost, Name: e.target.value })} />
                    <label>Host Expertise:</label>
                    <input type="text" placeholder="Enter expertise" value={currentHost.Expertise} onChange={(e) => setCurrentHost({ ...currentHost, Expertise: e.target.value })} />
                    <label>Host Place:</label>
                    <input type="text" placeholder="Enter place" value={currentHost.Place} onChange={(e) => setCurrentHost({ ...currentHost, Place: e.target.value })} />
                    <button type="submit">Submit</button>
                </form>
            </Modal>

            <Table>
                <TableCaption>A list of Tabaani hosts.</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[120px]">Image</TableHead>
                        <TableHead>Name</TableHead>
                        <TableHead>Expertise</TableHead>
                        <TableHead>Place</TableHead>
                        <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {hosts.map((host, index) => (
                        <TableRow key={index}>
                            <TableCell>
                                <img src={host.Photo} alt="Host" className="h-8 w-8 ml-2" />
                            </TableCell>
                            <TableCell>{host.Name}</TableCell>
                            <TableCell>{host.Expertise}</TableCell>
                            <TableCell>{host.Place}</TableCell>
                            <TableCell className="text-right">
                                <Button variant="outline" className="ml-1 p-2" onClick={() => openModal('edit', host)}>
                                    <SettingsSuggestIcon />
                                </Button>
                                <Button variant="outline" className="ml-1 p-2" onClick={() => handleDeleteHost(host._id!)}>
                                    <DeleteIcon />
                                </Button>
                            </TableCell>
                        </TableRow>
                    ))}

                    {hosts.length === 0 && (
                        <TableRow>
                            <TableCell colSpan={5}>No hosts available right now.</TableCell>
                        </TableRow>
                    )}
                </TableBody>
            </Table>
        </div>
    );
};

export default Hosts;
