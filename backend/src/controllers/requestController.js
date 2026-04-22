const { PrismaClient } = require('@prisma/client');
const { PrismaNeon } = require('@prisma/adapter-neon');
const { neonConfig } = require('@neondatabase/serverless');
const ws = require('ws');

require('dotenv').config();

neonConfig.webSocketConstructor = ws;
const adapter = new PrismaNeon({
    connectionString: "postgresql://neondb_owner:npg_x5vcSUsJHn4a@ep-raspy-unit-aohe16qy.c-2.ap-southeast-1.aws.neon.tech/neondb?sslmode=require"
});
const prisma = new PrismaClient({ adapter });

// Submit a new credentialing request
const submitRequest = async (req, res) => {
    try {
        const { jobRole, description, deadline } = req.body;
        const documents = req.file ? req.file.filename : null;

        const request = await prisma.credentialingRequest.create({
            data: {
                userId: req.user.id,
                jobRole,
                description,
                deadline: new Date(deadline),
                documents
            }
        });

        res.status(201).json({ message: 'Request submitted successfully', request });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get logged in user's requests
const getUserRequests = async (req, res) => {
    try {
        const requests = await prisma.credentialingRequest.findMany({
            where: { userId: req.user.id },
            orderBy: { createdAt: 'desc' }
        });

        res.status(200).json(requests);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get all requests (admin only)
const getAllRequests = async (req, res) => {
    try {
        const requests = await prisma.credentialingRequest.findMany({
            include: { user: { select: { name: true, email: true } } },
            orderBy: { createdAt: 'desc' }
        });

        res.status(200).json(requests);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update request status (admin only)
const updateRequestStatus = async (req, res) => {
    try {
        const { id } = req.params;
        const { status } = req.body;

        const request = await prisma.credentialingRequest.update({
            where: { id },
            data: { status }
        });

        res.status(200).json({ message: 'Status updated successfully', request });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = { submitRequest, getUserRequests, getAllRequests, updateRequestStatus };