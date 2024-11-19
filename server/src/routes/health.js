const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

router.get('/health', async (req, res) => {
    try {
        // Check database connection
        const dbStatus = mongoose.connection.readyState === 1;
        
        // Check system resources
        const systemHealth = {
            uptime: process.uptime(),
            memory: process.memoryUsage(),
            cpu: process.cpuUsage()
        };

        if (dbStatus) {
            res.json({
                status: 'healthy',
                database: 'connected',
                ...systemHealth
            });
        } else {
            res.status(503).json({
                status: 'unhealthy',
                database: 'disconnected',
                ...systemHealth
            });
        }
    } catch (error) {
        res.status(500).json({
            status: 'error',
            message: error.message
        });
    }
});

module.exports = router; 