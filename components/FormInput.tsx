import type { FieldType } from "../types/form.types";

type FormInputProps = {
  type: Extract<FieldType, "text" | "number" | "email">;
  placeholder?: string;
  name?: string;
};

export const FormInput = ({ type, placeholder, name }: FormInputProps) => {
  return <input type={type} placeholder={placeholder} name={name} className="form-input" />;
};
