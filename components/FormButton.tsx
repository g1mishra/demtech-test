import type { ButtonType, ButtonVariant } from "../types/form.types";

type FormButtonProps = {
  label: string;
  type: ButtonType;
  variant?: ButtonVariant;
};

export const FormButton = ({ label, type, variant = "primary" }: FormButtonProps) => {
  return (
    <button type={type} className={`btn-${variant}`}>
      {label}
    </button>
  );
};
