const express = require('express')
const Router = express.Router();
const  {findsingleemployee} = require('../controllers/employeeController2')

Router.get('/:id',findsingleemployee)


module.exports = Router