type Option = {
  label: string;
  value: string;
};

type FormCheckboxProps = {
  options: Option[];
  name: string;
};

export const FormCheckbox = ({ options, name }: FormCheckboxProps) => {
  return (
    <div className="checkbox-group">
      {options.map((opt, idx) => (
        <div key={idx} className="checkbox-option">
          <input type="checkbox" name={name} value={opt.value} id={`${name}-${idx}`} />
          <label htmlFor={`${name}-${idx}`}>{opt.label}</label>
        </div>
      ))}
    </div>
  );
};
