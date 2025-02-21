import type { Option } from "../types/form.types";

type FormSelectProps = {
  options: Option[];
  name?: string;
  required?: boolean;
};

export const FormSelect = ({ options, name, required }: FormSelectProps) => {
  return (
    <select name={name} className="form-select" required={required}>
      <option value="">Select an option</option>
      {options.map((opt, idx) => (
        <option key={idx} value={opt.value}>
          {opt.label}
        </option>
      ))}
    </select>
  );
};
