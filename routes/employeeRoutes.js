const express =require('express')
const router = express.Router()
const employeeController = require('../controllers/employeeController')
const Employee = require('../models/Employee')

router.route('/add-emp')
    .post(employeeController.createEmployee)
    
router.route('/get-emp')
    .get(employeeController.getEmployees)

module.exports = router