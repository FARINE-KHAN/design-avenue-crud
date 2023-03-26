// import from '@emotion/styled'
import {
  styled,
  FormControl,
  FormGroup,
  Input,
  InputLabel,
  Typography,
  Button,
} from "@mui/material";
import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Container = styled(FormGroup)`
  width: 50%;
  margin: 5% auto 5% auto;
  & > div {
    margin-top: 20px;
  }
`;
const AddUser = () => {
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
  const handleChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await axios.post("http://localhost:8800/add", inputs);
      toast.success(res.data,toastOptions)
      navigate("/");
    } catch (err) {
      toast.error(err.response.data, toastOptions);
    }
  };

  return (
    <Container>
      <Typography variant="h4">Add employee</Typography>
      <FormControl>
        <InputLabel>Full Name</InputLabel>
        <Input onChange={handleChange} name="fulName" />
      </FormControl>
      <FormControl>
        <InputLabel>Email</InputLabel>
        <Input onChange={handleChange} name="email" type="email" />
      </FormControl>
      <FormControl>
        <InputLabel>Phone Number</InputLabel>
        <Input onChange={handleChange} name="phone" type="phone" />
      </FormControl>
      <FormControl>
        <InputLabel>Designation</InputLabel>
        <Input onChange={handleChange} name="designation" />
      </FormControl>
      <FormControl>
        <Button variant="contained" onClick={handleSubmit}>
          Submit
        </Button>
      </FormControl>
      <ToastContainer />
    </Container>
  );
};

export default AddUser;
