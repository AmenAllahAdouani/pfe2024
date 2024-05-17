"use client"

import React, { useState, FormEvent } from 'react';
import { TextField, Button, Grid, Typography } from '@mui/material';
import { AttachFile } from '@mui/icons-material';

const News = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    //const [images, setImages] = useState<FileList | null>(null);

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!title || !content) {
            alert('Please fill in all fields');
            return;
        }
    
        const requestBody = {
            title,
            content
        };
    
        try {
            const response = await fetch('http://localhost:3001/api/newsletter', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(requestBody)
            });
    
            if (response.ok) {
                alert('Newsletter created and sent successfully!');
                setTitle('');
                setContent('');
            } else {
                alert('Failed to create newsletter');
            }
        } catch (error) {
            console.error('Error creating newsletter:', error);
            alert('An error occurred while creating the newsletter');
        }
    };

    return (
        <div>
            <div className="max-w-3xl mx-auto p-8">
                <Typography variant="h3" gutterBottom className="text-center font-bold text-amber-500">
                    Create Newsletter
                </Typography>
                <form onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                label="Title"
                                variant="outlined"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                multiline
                                rows={4}
                                label="Content"
                                variant="outlined"
                                value={content}
                                onChange={(e) => setContent(e.target.value)}
                            />
                        </Grid>
                        {/*
                        <Grid item xs={12}>
                            <input
                                type="file"
                                accept="image/*"
                                onChange={(e) => setImages(e.target.files)}
                                id="upload-button"
                                style={{ display: 'none' }}
                                multiple
                            />
                            <label htmlFor="upload-button">
                                <Button
                                    variant="outlined"
                                    component="span"
                                    startIcon={<AttachFile />}
                                    className="border-amber-500 text-amber-500 hover:border-amber-200"
                                >
                                    Attach Images
                                </Button>
                            </label>
                        </Grid>
                        */}
                        <Grid item xs={12}>
                            <Button variant="contained" type="submit" className="bg-amber-500 hover:bg-amber-200 hover:text-amber-500">
                                Create Newsletter
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </div>
        </div>
    );
}

export default News;
