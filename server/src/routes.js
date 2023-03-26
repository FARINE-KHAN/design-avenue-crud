const express =require("express") 
const router = express.Router()
const {createEmployee,getUser,fetchData,editData,deleteData}= require("./controller/employeeController")
router.post("/add",createEmployee)
router.get("/all",fetchData)
router.get("/user/:id",getUser)
router.post("/edit/:id",editData)
router.delete("/delete/:id",deleteData)


module.exports=router;