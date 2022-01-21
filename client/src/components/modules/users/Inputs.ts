import { Inputs } from "types/components/inputs";

export const inputs: Array<Inputs> = [
  {
    name: "id",
    disabled: true,
    label: "ID",
    type: "text",
    placeholder: "11",
    errorMessage: "can't be changed",
    required: false,
  },
  {
    name: "first_name",
    disabled: false,
    placeholder: "Exp: Mohamed",
    label: "First Name",
    required: true,
    type: "text",
    errorMessage: "Please Enter a valid name",
  },
  {
    name: "last_name",
    disabled: false,
    placeholder: "Exp: Al-Khawam",
    label: "Last Name",
    required: true,
    type: "text",
    errorMessage: "Please Enter a valid name",
  },
  {
    name: "email",
    placeholder: "Exp: example@example.com",
    label: "Email",
    disabled: false,
    type: "email",
    pattern: `/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/`,
    required: true,
    errorMessage: "Please enter a valid email address!",
  },
];
