const model= require("../model/employee")

const createEmployee = async (req,res)=>{
    try {
        const {fulName,email,phone,designation}=req.body
        if(!fulName){
            return res.status(400).json("Please enter full name")
        }
        if(!email){
            return res.status(400).json("Please enter email")
        }
        if(!phone){
            return res.status(400).json("Please enter phone number")
        }
        if(!designation){
            return res.status(400).json("Please enter designation")
        }
        const duplicateEmail = await model.findOne({email})
        if(duplicateEmail){
            return res.status(404).json(`This email ${duplicateEmail.email} is already in use`)
        }
        const duplicatePhone = await model.findOne({phone})
        if(duplicatePhone){
            return res.status(404).json(`This phone number ${duplicatePhone.phone} is already in use`)
        }
        const saveData= await model.create(req.body)
        return res.status(201).json(`${fulName} employee added successfully`)
    } catch (error) {
        res.status(500).json(error.message)
    }
}
const fetchData= async (req,res)=>{
    try {
        const saveData= await model.find()
        return res.status(200).json(saveData)
    } catch (error) {
        res.status(500).json(error.message) 
    }
}
const editData = async (req,res)=>{
    try {
        let data = req.params.id
        let sav = await model.findByIdAndUpdate(data,req.body)
        return res.status(200).json(sav)
        
    } catch (error) {
        res.status(500).json(error.message) 
    }
}
const getUser =async (req,res)=>{
try {
    let data = req.params.id
     let sav = await model.findById(data)
     return res.status(200).json(sav)
} catch (error) {
    res.status(500).json(error.message) 
}
}
const deleteData = async (req,res)=>{
    try {
        let data = req.params.id
        let sav = await model.findByIdAndDelete(data)
        res.status(200).json("Data deleted successfully")
        
    } catch (error) {
        res.status(500).json(error.message) 
    }
}
module.exports={createEmployee,fetchData,editData,deleteData,getUser}