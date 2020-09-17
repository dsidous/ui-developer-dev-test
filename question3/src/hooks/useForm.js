import { useEffect, useState } from 'react';

const initialState = {
  firstname: '',
  lastname: '',
  dob: '',
  austate: '',
};

const useForm = (callback, validate) => {
  const [state, setState] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validate(state));
    setIsSubmitting(true);
  };

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  useEffect(() => {
    if (Object.values(errors).length === 0 && isSubmitting) {
      callback();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [errors]);

  return {
    state,
    handleChange,
    handleSubmit,
    errors,
  };
};

export default useForm;
