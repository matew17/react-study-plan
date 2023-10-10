import { ChangeEvent, useState } from "react";

export const useForm = (initialValues: Record<string, string>) => {
  const [values, setValues] = useState(initialValues);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setValues({ ...values, [name]: value });
  };

  const resetForm = () => {
    setValues({ ...initialValues });
  };

  return {
    values,
    handleChange,
    resetForm,
  };
};
