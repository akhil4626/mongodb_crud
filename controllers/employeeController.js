const Employee = require('../models/Employee')
const createEmployee = async (req, res) => {
    try {
        console.log('full request obect',req)
        const { firstName, lastName, emailId } = req.body;

        // Basic validation to ensure required fields are present
        if (!firstName || !lastName || !emailId) {
            return res.status(400).json({ message: 'Please provide values for firstName, lastName, and emailId' });
        }

        const employee = new Employee({
            firstName,
            lastName,
            emailId
        });

        await employee.save();
        res.status(201).json(employee);
    } catch (error) {
        console.log("There is an error", error);
        res.status(500).json({ message: 'Server error' });
    }
};


const getEmployees = async (req,res) => {
    try{
        const employees = await Employee.find()
        res.status(200).json(employees)
    } catch(error){
        console.error("there is an error:", error)
        res.status(500).json({message:"server error"})
    }
}


module.exports = { createEmployee , getEmployees} ;


