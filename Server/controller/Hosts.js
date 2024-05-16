const HostModel = require('../model/Hosts');
const express = require('express');

class Host {
    static async createHost(req, res) {
        try {
            // Create a new Host document
            const newHost = new HostModel(req.body);
            
            // Save the new Host to the database
            const savedHost = await newHost.save();
            
            // Respond with the saved Host
            res.status(201).json(savedHost.id);
        } catch (error) {
            // If an error occurs, respond with an error status and message
            res.status(400).json({ message: error.message });
        }
    }

    static async getAllHosts(_req, res) {
        try { 
            const hosts = await HostModel.find();
            res.status(200).json(hosts);
        } catch (error) {
            console.error('Error fetching hosts:', error);
            res.status(400).json({ message: error.message });
        }
    }

    static async updateHost(req, res) {
        try {
            const updatedHost = await Host.findByIdAndUpdate(req.params.id, req.body, { new: true });
            if (!updatedHost) {
                console.log
                return res.status(404).json({ message: 'Host not found' });
            }
            res.status(200).json(updatedHost);
        } catch (error) {
            console.error('Error updating host:', error);
            res.status(500).json({ message: 'Internal server error' });
        }
    }

    static async deleteHost(req, res) {
        try {
            const deletedHost = await HostModel.findByIdAndDelete(req.params.id);
            if (!deletedHost) {
                return res.status(404).json({ message: 'Host not found' });
            }
            res.status(200).json({ message: 'Host deleted successfully' });
        } catch (error) {
            console.error('Error deleting Host:', error);
            res.status(500).json({ message: 'Internal server error' });
        }
    }
}
module.exports = Host;