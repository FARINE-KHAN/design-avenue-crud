import { styled, FormControl, FormGroup, Input, InputLabel, Typography, Button} from '@mui/material'
import React, { useEffect, useState } from 'react'
import axios from "axios"
import { Link, useNavigate, useParams } from 'react-router-dom'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Container = styled(FormGroup)`
width:50%;
margin:5% auto 5% auto;
& > div{
    margin-top:20px;
}

`
const EditUser = () => {
  const toastOptions = {
    position: "bottom-right",
    autoClose: 8000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  };
        
    const [inputs, setInputs] = useState({
        fulName: "",
        email: "",
        phone: "",
        designation: "",
      });
      const {id}=useParams()
      const [err, setError] = useState(null);
      const handleChange = (e) => {
        setInputs( { ...inputs, [e.target.name]: e.target.value });
      };
   
    
      const navigate = useNavigate();
      const handleSubmit = async (e) => {
        e.preventDefault();
        try {
         let res= await axios.post(`http://localhost:8800/edit/${id}`, inputs);
         navigate("/");

        } catch (err) {
          
      toast.error(err.response.data, toastOptions);

        }
      };
      const loadUser=async ()=>{
        try {
           const res = await axios.get(`http://localhost:8800/user/${id}`)
        setInputs(res.data)
        } catch (error) {  
      toast.error(err.response.data, toastOptions);
        }
       
      }
      useEffect(()=>{
        loadUser()
      },[])
  return (
    <Container>
        <Typography variant="h4">Edit employee</Typography>
       <FormControl>
        <InputLabel >
        Full Name
        </InputLabel>
        <Input onChange={handleChange} name="fulName" value={inputs.fulName}/>
        </FormControl>
        <FormControl>
        <InputLabel>
        Email
        </InputLabel>
        <Input onChange={handleChange} name="email" type='email' value={inputs.email}/>
        </FormControl>
        <FormControl>
        <InputLabel >
        Phone Number
        </InputLabel>
        <Input onChange={handleChange} name="phone" type='phone' value={inputs.phone}/>
        </FormControl>
        <FormControl>
        <InputLabel>
        Designation
        </InputLabel>
        <Input onChange={handleChange} name="designation" value={inputs.designation}/>
        </FormControl>
        <FormControl>
        {err && <p>{err}</p>}
         <Button variant="contained" onClick={handleSubmit}>
                Submit
            </Button>
            </FormControl> 
            <ToastContainer />
    </Container>
  )
}

export default EditUser