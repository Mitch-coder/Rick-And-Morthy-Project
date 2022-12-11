import { ChangeEvent, useState } from "react";

const useField = (defaultValue = "") => {
  const [value, setValue] = useState(defaultValue);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setValue(value);
  };
  
  return { value, onChange };
};

export { useField };
