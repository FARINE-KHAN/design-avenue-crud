import styled from "@emotion/styled";

import {
    Button,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Styltable = styled(Table)`
  width: 80%;
  margin: 50px auto 0 auto;
`;
const Trow = styled(TableRow)`
  background-color: #0e1444;
  & > th {
    color: white;
    font-size:20px
  }
`;
const TBR = styled(TableRow)`
  & > td{
    font-size:18px;
  }
`;

const Dashboard = () => {
  const toastOptions = {
    position: "bottom-right",
    autoClose: 8000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  };
  const [emp, setEmp] = useState({});
  const fetchEmp = async () => {
    try {
      const result = await axios.get("http://localhost:8800/all");
    setEmp(result.data);
    } catch (error) {
      
      toast.error(err.response.data, toastOptions);
    }
    
  };
  const deleteEmp = async (id) => {
    try {
       const result = await axios.delete(`http://localhost:8800/delete/${id}`);
    fetchEmp();
    setEmp(result.data);
    toast.success(result.data,toastOptions)
    } catch (error) {
      toast.error(error.response.data, toastOptions);
    }
   
  };
  useEffect(() => {
    fetchEmp();
  }, []);
  return (
    <Styltable>
      <TableHead>
        <Trow>
          <TableCell>Id</TableCell>
          <TableCell>Name</TableCell>
          <TableCell>Email</TableCell>
          <TableCell>Phone</TableCell>
          <TableCell>designation</TableCell>
          <TableCell></TableCell>
          <TableCell></TableCell>
        </Trow>
      </TableHead>
      <TableBody>  
  {emp.length==0?<h1>no data present<span>!</span></h1>:
        Object.entries(emp).map((empl, id) => (
        
          <TBR key={id}>
            <TableCell>{id + 1}</TableCell>
            <TableCell>{empl[1].fulName}</TableCell>
            <TableCell>{empl[1].email}</TableCell>
            <TableCell>{empl[1].phone}</TableCell>
            <TableCell>{empl[1].designation}</TableCell>
            <TableCell>
               <Button variant="contained" component={Link} to={`/edit/${empl[1]._id}`}>  <i className="fa-regular fa-pen-to-square"></i></Button></TableCell>
            <TableCell> <Button variant="contained" color="secondary" onClick={()=>deleteEmp(empl[1]._id)}>   <i className="fa-solid fa-trash"></i></Button></TableCell>
          </TBR>
        ))}
      </TableBody>
      <ToastContainer />
    </Styltable>
  );
};

export default Dashboard;
