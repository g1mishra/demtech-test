type Option = {
  label: string;
  value: string;
};

type FormRadioProps = {
  options: Option[];
  name: string;
};

export const FormRadio = ({ options, name }: FormRadioProps) => {
  return (
    <div className="radio-group">
      {options.map((opt, idx) => (
        <div key={idx} className="radio-option">
          <input type="radio" name={name} value={opt.value} id={`${name}-${idx}`} />
          <label htmlFor={`${name}-${idx}`}>{opt.label}</label>
        </div>
      ))}
    </div>
  );
};
