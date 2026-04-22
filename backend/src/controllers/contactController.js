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

// Submit contact message
const submitMessage = async (req, res) => {
    try {
        const { name, email, message } = req.body;

        const contact = await prisma.contactMessage.create({
            data: { name, email, message }
        });

        res.status(201).json({ message: 'Message sent successfully', contact });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get all messages (admin only)
const getAllMessages = async (req, res) => {
    try {
        const messages = await prisma.contactMessage.findMany({
            orderBy: { createdAt: 'desc' }
        });

        res.status(200).json(messages);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = { submitMessage, getAllMessages };