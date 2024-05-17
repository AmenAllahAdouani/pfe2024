"use client"

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import SendIcon from '@mui/icons-material/Send';
import DeleteIcon from '@mui/icons-material/Delete';

interface History {
    _id?: string;
    title: string;
    content: string;
    createdAt: string;
}

const NewsHistory = () => {

    const [news, setNews] = useState<History[]>([]);

    useEffect(() => {
        fetchNews();
    }, []);

    const fetchNews = async () => {
        try {
            const response = await axios.get<History[]>('http://localhost:3001/api/newsletter');
            setNews(response.data);
        } catch (error) {
            console.error('Failed to fetch news:', error);
        }
    };

    // Function to format dates
    const formatDate = (date?: string): string => {
        return date ? new Date(date).toLocaleDateString() : 'N/A';
    };

    const handleDeleteNews = async (id: string) => {
        try {
            await axios.delete(`http://localhost:3001/api/newsletter/${id}`);
            setNews(news.filter(newsItem => newsItem._id !== id));
        } catch (error) {
            console.error('Error deleting news:', error);
        }
    };

    const handleSendNews = async (id: string) => {
        try {
            await axios.post(`http://localhost:3001/api/newsletter/${id}`);
            console.log('News sent successfully');
        } catch (error) {
            console.error('Error sending news:', error);
        }
    };

    return (
        <div>
            <Table>
                <TableCaption>A list of Tabaani newsletters.</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead className="text-amber-500">Title</TableHead>
                        <TableHead className="text-amber-500">Content</TableHead>
                        <TableHead className="text-amber-500">Date</TableHead>
                        <TableHead className="text-right text-amber-500">Actions</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {news.map((newsItem, index) => (
                        <TableRow key={index}>
                            <TableCell>{newsItem.title}</TableCell>
                            <TableCell>{newsItem.content}</TableCell>
                            <TableCell>{formatDate(newsItem.createdAt)}</TableCell>
                            <TableCell className="text-right text-amber-500">
                                <Button variant="outline" className="ml-1 p-2" onClick={() => handleDeleteNews(newsItem._id!)}>
                                    <DeleteIcon />
                                </Button>
                                <Button variant="outline" className="ml-1 p-2" onClick={() => handleSendNews(newsItem._id!)}>
                                    <SendIcon />
                                </Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
}

export default NewsHistory;


