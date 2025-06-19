const Company = require("../Models/companyModel");

// Create new company
exports.createCompany = async (req, res) => {
  try {
    const company = new Company(req.body);
    await company.save();
    res.status(201).json(company);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Get all companies
exports.getAllCompanies = async (req, res) => {
  try {
    const companies = await Company.find();
    res.status(200).json(companies);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

//Editing an existing company
exports.editCompany = async (req, res) => {
  try {
    const { companyId } = req.params;
    const updatedData = req.body;

    const updatedCompany = await Company.findByIdAndUpdate(
      companyId,
      updatedData,
      { new: true, runValidators: true }
    );

    if (!updatedCompany) {
      return res.status(404).json({ error: 'Company not found' });
    }

    res.status(200).json(updatedCompany);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
