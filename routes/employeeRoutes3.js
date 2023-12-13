const express = require('express')
const router = express.Router();
const {updateDb, deletedb} = require('../controllers/employeeController3')
router.route('/:id')
    .put(updateDb)
    .delete(deletedb)

module.exports = router