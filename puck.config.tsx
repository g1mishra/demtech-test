import type { Config } from "@measured/puck";
import { FormInput } from "./components/FormInput";
import { FormSelect } from "./components/FormSelect";
import { FormRadio } from "./components/FormRadio";
import { FormCheckbox } from "./components/FormCheckbox";
import { FormButton } from "./components/FormButton";
import type { FormConfig, FieldType } from "./types/form.types";
import toast from "react-hot-toast";

type Props = {
  HeadingBlock: { title: string };
  Form: FormConfig;
};

export const config: Config<Props> = {
  components: {
    HeadingBlock: {
      fields: {
        title: {
          type: "text",
          label: "Title",
        },
      },
      defaultProps: {
        title: "Heading",
      },
      render: ({ title }) => (
        <div style={{ padding: 64 }}>
          <h1>{title}</h1>
        </div>
      ),
    },

    Form: {
      fields: {
        items: {
          type: "array",
          getItemSummary: (item, idx) => item.label || `Field-${idx}`,
          arrayFields: {
            type: {
              type: "select",
              options: [
                { value: "text", label: "Text" },
                { value: "number", label: "Number" },
                { value: "email", label: "Email" },
                { value: "radio", label: "Radio" },
                { value: "checkbox", label: "Checkbox" },
                { value: "select", label: "Select" },
                { value: "textarea", label: "Textarea" },
              ] as Array<{ value: FieldType; label: string }>,
            },
            label: {
              type: "text",
              label: "Label",
            },
            placeholder: {
              type: "text",
              label: "Placeholder",
            },
            required: {
              type: "radio",
              label: "Required",
              options: [
                { label: "Yes", value: true },
                { label: "No", value: false },
              ],
            },
            options: {
              type: "array",
              label: "Options (Radio/Checkbox/Select)",
              arrayFields: {
                label: { type: "text", label: "Label" },
                value: { type: "text", label: "Value" },
              },
              getItemSummary(item, index) {
                return item.label || `Option-${index}`;
              },
            },
          },
        },
        buttons: {
          type: "array",
          min: 1,
          max: 3,
          getItemSummary: (item) => `Button: ${item.label}`,
          arrayFields: {
            label: { type: "text" },
            type: {
              type: "select",
              options: [
                { label: "submit", value: "submit" },
                { label: "button", value: "button" },
              ],
            },
            variant: {
              type: "select",
              options: [
                { label: "primary", value: "primary" },
                { label: "secondary", value: "secondary" },
              ],
            },
          },
          defaultItemProps: {
            label: "Button Text",
            type: "submit",
            variant: "primary",
          },
        },
      },

      render: ({ items, buttons }) => {
        const handleSubmit = (e: React.FormEvent) => {
          e.preventDefault();
          const formData = new FormData(e.target as HTMLFormElement);
          const data = Object.fromEntries(formData.entries());
          console.log("Form Data", data);
          toast.success("Form submitted!");
        };
        return (
          <form className="puck-form" onSubmit={handleSubmit}>
            {items?.map((item, index) => {
              const { type, label, options, placeholder, required } = item;
              const fieldName = `field-${index}`;

              return (
                <div key={index} className="form-field">
                  <label>
                    {label}
                    {required && <span className="required-mark">*</span>}
                  </label>
                  {type === "text" && (
                    <FormInput
                      type="text"
                      placeholder={placeholder}
                      name={fieldName}
                      required={required}
                    />
                  )}
                  {type === "number" && (
                    <FormInput
                      type="number"
                      placeholder={placeholder}
                      name={fieldName}
                      required={required}
                    />
                  )}
                  {type === "email" && (
                    <FormInput
                      type="email"
                      placeholder={placeholder}
                      name={fieldName}
                      required={required}
                    />
                  )}
                  {type === "radio" && options && <FormRadio options={options} name={fieldName} />}
                  {type === "checkbox" && options && (
                    <FormCheckbox options={options} name={fieldName} />
                  )}
                  {type === "select" && options && (
                    <FormSelect options={options} name={fieldName} required={required} />
                  )}
                  {type === "textarea" && (
                    <textarea
                      placeholder={placeholder}
                      name={fieldName}
                      required={required}
                    ></textarea>
                  )}
                </div>
              );
            })}
            <div className="form-buttons">
              {buttons?.map((button, i) => (
                <FormButton
                  key={i}
                  label={button.label}
                  type={button.type}
                  variant={button.variant}
                />
              ))}
            </div>
          </form>
        );
      },

      defaultProps: {
        items: [
          {
            type: "text",
            label: "Name",
            placeholder: "Enter your name",
            required: true,
          },
          {
            type: "email",
            label: "Email",
            placeholder: "Enter your email",
            required: true,
          },
          {
            type: "select",
            label: "Country",
            options: [
              { label: "USA", value: "usa" },
              { label: "Canada", value: "canada" },
              { label: "UK", value: "uk" },
            ],
          },
          {
            type: "radio",
            label: "Preferred Contact Method",
            options: [
              { label: "Email", value: "email" },
              { label: "Phone", value: "phone" },
              { label: "Mail", value: "mail" },
            ],
          },
          {
            type: "checkbox",
            label: "Interests",
            options: [
              { label: "Technology", value: "tech" },
              { label: "Sports", value: "sports" },
              { label: "Music", value: "music" },
            ],
          },
          {
            type: "textarea",
            label: "Message",
            placeholder: "Enter your message",
          },
        ],

        buttons: [
          {
            label: "Submit",
            variant: "primary",
            type: "submit",
          },
        ],
      },
    },
  },
};

export default config;
