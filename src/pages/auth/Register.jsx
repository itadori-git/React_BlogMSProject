import React from "react";
import Form from "../../pages/auth/components/form/Form";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function Register() {
  const navigate = useNavigate();
  const handleRegister = async (data) => {
    try{
      const response = await axios.post(
        "https://react30.onrender.com/api/user/register",
        data
      );
      if (response.status === 201) {
        navigate("/Login");
      } else {
        alert("regestration failed");
      }  
    }catch(error){
      alert(error?.response?.data?.message)
    }
  };
  return <Form type="Register" onSubmit={handleRegister} />;
}

export default Register;
