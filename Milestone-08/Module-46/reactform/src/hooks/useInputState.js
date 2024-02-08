import { useState } from "react";

export const useInput = (defaultValue = null) => {
  const [value, setValue] = useState(defaultValue);

  const handleChnage = (e) => {
    setValue(e.target.value);
  };

  return [value, handleChnage];
};
