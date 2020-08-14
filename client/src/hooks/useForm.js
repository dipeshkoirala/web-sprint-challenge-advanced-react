// write your custom hook here to control your checkout form

//1. Necessary import

import { useState } from "react";

const UseForm = (initialValue) => {
  //state using useState
  const [message, setMessage] = useState(false);
  const [values, setValues] = useState(initialValue);

  const handleChange = () => {
    console.log("this is from useForm-HandleChange");
  };
  const handleSubmit = () => {
    console.log("This is handleSubmit from useForm.js");
  };
  return [message, values, handleChange, handleSubmit];
};

export default UseForm;
