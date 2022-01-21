export type Inputs = {
  name: "id" | "first_name" | "last_name" | "email";
  disabled: boolean;
  placeholder: string;
  label: string;
  required?: boolean;
  type?: string;
  errorMessage?: string;
  pattern?: string;
};
