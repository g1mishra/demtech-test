export type FieldType = "text" | "number" | "email" | "radio" | "checkbox" | "select" | "textarea";

export type Option = {
  label: string;
  value: string;
};

export type FormField = {
  type: FieldType;
  label: string;
  placeholder?: string;
  options?: Option[];
};

export type ButtonVariant = "primary" | "secondary";

export type ButtonType = "submit" | "button";

export type FormButton = {
  label: string;
  type: ButtonType;
  variant?: ButtonVariant;
};

export type FormConfig = {
  items: FormField[];
  buttons?: FormButton[];
};
