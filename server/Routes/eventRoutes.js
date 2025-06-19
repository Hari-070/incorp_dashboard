const express= require('express')

const { addEvent, deleteEvent } = require('../Controllers/eventController.js');

const router = express.Router();

// Event routes
router.post('/companies/:companyId/services/:serviceName/events', addEvent);
router.delete('/companies/:companyId/services/:serviceName/events/:eventId', deleteEvent);

module.exports=router