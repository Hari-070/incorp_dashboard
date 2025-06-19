// import Company from '../models/Company.js';
// const Company = require('.')

const Company = require("../Models/companyModel");


// Add event to a service
exports.addEvent = async (req, res) => {
  try {
    const { companyId, serviceName } = req.params;
    const company = await Company.findById(companyId);
    
    if (!company) return res.status(404).json({ error: 'Company not found' });

    const service = company.services.find(s => s.serviceName === serviceName);
    if (!service) return res.status(404).json({ error: 'Service not found' });

    service.events.push(req.body);
    await company.save();
    res.status(200).json(company);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Delete an event from a service
exports.deleteEvent = async (req, res) => {
  try {
    const { companyId, serviceName, eventId } = req.params;
    const company = await Company.findById(companyId);
    if (!company) return res.status(404).json({ error: 'Company not found' });

    const service = company.services.find(s => s.serviceName === serviceName);
    if (!service) return res.status(404).json({ error: 'Service not found' });

    const eventIndex = service.events.findIndex(e => e._id.toString() === eventId);
    if (eventIndex === -1) return res.status(404).json({ error: 'Event not found' });

    service.events.splice(eventIndex, 1);
    await company.save();
    res.status(200).json(company);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};