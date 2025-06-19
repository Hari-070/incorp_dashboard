const { createCompany, getAllCompanies, editCompany, } = require('../Controllers/companyController.js');

const express=require('express')

const router = express.Router();

// Company routes
router.post('/companies', createCompany);
router.get('/companies', getAllCompanies);
router.put('/companies/:companyId',editCompany)

module.exports=router
