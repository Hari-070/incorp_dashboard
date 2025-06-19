const express=require('express');
const { addDirector, updateDirector, deleteDirector } = require('../Controllers/directorController');


const router = express.Router();
// Director routes
router.post('/companies/:companyId/directors', addDirector);
router.put('/companies/:companyId/directors/:directorId', updateDirector);
router.delete('/companies/:companyId/directors/:directorId', deleteDirector);

module.exports=router