const Employee = require('../models/Employee')

const findsingleemployee = async (req,res) => {
    try{
        const employee = await Employee.findById(req.params.id)
        if(!employee){
            return res.status(404).json({"message":"Nothing is found by the given id"})
     
        }
        return res.status(200).json(employee)
    }
    catch(error){
        console.log(error);
        res.status(500).json({"message":"internal server error"})
    }

}

module.exports = {findsingleemployee}

