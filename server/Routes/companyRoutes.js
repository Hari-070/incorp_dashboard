const { createCompany, getAllCompanies, editCompany, getCompanyById, } = require('../Controllers/companyController.js');

const express=require('express')

const router = express.Router();

// Company routes
router.post('/companies', createCompany);
router.get('/companies', getAllCompanies);
router.put('/companies/:companyId',editCompany)
router.get('/companies/:id',getCompanyById)

module.exports=router
