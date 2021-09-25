import { useState } from "react";
const useForm = () => {
  const [state, setState] = useState({});
  const handleSubmit = (submitCallback) => (e) => {
    e.preventDefault();
    submitCallback(state);
  };
  const handleChange = (e) => {
    setState((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  return [state, handleChange, handleSubmit];
};

export default useForm;
