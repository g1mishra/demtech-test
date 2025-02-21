import type { FieldType } from "../types/form.types";

type FormInputProps = {
  type: Extract<FieldType, "text" | "number" | "email">;
  placeholder?: string;
  name?: string;
  required?: boolean;
};

export const FormInput = ({ type, placeholder, name, required }: FormInputProps) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      name={name}
      required={required}
      className="form-input"
    />
  );
};
