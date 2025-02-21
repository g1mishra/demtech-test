import type { Option } from "../types/form.types";

type FormSelectProps = {
  options: Option[];
  name?: string;
};

export const FormSelect = ({ options, name }: FormSelectProps) => {
  return (
    <select name={name} className="form-select">
      <option value="">Select an option</option>
      {options.map((opt, idx) => (
        <option key={idx} value={opt.value}>
          {opt.label}
        </option>
      ))}
    </select>
  );
};
