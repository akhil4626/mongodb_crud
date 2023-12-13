const Employee = require('../models/Employee')

const updateDb = async (req,res) => {
    try{
        const {firstName, lastName, emailId} = req.body;
        let employee = await Employee.findByIdAndUpdate(req.params.id, {firstName, lastName, emailId})
        if(!employee){
            return res.status(404).send('employee details not found bro!!!')
        }
        return res.status(201).json(employee)
    }
    catch(error){
        console.log('there is an error here', error)
    }
}


const deletedb = async (req,res) => {
    try{
        let employee = await Employee.findByIdAndDelete(req.params.id)
        if(!employee){
            return res.status(404).send('employee details not found bro!!!')

        }
        return res.status(201).json(employee, "deleted the above document successfully bro!!!")
    }
    catch(error){
        console.log('there is an error here', error)
    }
}

module.exports = {updateDb, deletedb}