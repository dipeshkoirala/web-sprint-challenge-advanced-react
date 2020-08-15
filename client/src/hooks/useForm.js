// write your custom hook here to control your checkout form

//1. Necessary import

import { useState } from "react";

const UseForm = (initialValue) => {
  //state using useState
  const [message, setMessage] = useState(false);
  const [values, setValues] = useState(initialValue);

  const handleChange = (e) => {
    // console.log("this is from useForm-HandleChange");
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("This is handleSubmit from useForm.js");
    setMessage(true);
  };
  return [message, values, handleChange, handleSubmit];
};

export default UseForm;
