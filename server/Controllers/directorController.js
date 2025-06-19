const Company = require("../Models/companyModel");

// Add a director
exports.addDirector = async (req, res) => {
  try {
    const { companyId } = req.params;
    const company = await Company.findById(companyId);
    if (!company) return res.status(404).json({ error: 'Company not found' });

    company.directors.push(req.body);
    await company.save();
    res.status(200).json(company);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Update a director
exports.updateDirector = async (req, res) => {
  try {
    const { companyId, directorId } = req.params;
    const company = await Company.findById(companyId);
    if (!company) return res.status(404).json({ error: 'Company not found' });

    const director = company.directors.id(directorId);
    if (!director) return res.status(404).json({ error: 'Director not found' });

    Object.assign(director, req.body);
    await company.save();
    res.status(200).json(company);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Delete a director
exports.deleteDirector = async (req, res) => {
  try {
    const { companyId, directorId } = req.params;
    const company = await Company.findById(companyId);
    if (!company) return res.status(404).json({ error: 'Company not found' });

    company.directors.id(directorId).remove();
    await company.save();
    res.status(200).json(company);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};