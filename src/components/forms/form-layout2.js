import React from "react"
import { EmailIcon, PhoneIcon } from "@chakra-ui/icons"
import { UserIcon } from "../chakra-ui/icons/user-icon"

const icons = [<UserIcon />, <UserIcon />, <EmailIcon />, <PhoneIcon />]

const validations = [
  {
    required: true,
    minLength: { value: 2, message: "Please enter a valid first name." },
  },
  {
    required: true,
    minLength: { value: 2, message: "Please enter a valid last name." },
  },
  {
    required: true,
    pattern: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
    message: "Please enter a valid email address",
  },
  {
    required: true,
    pattern: {
      value: /^\d{3}-\d{3}-\d{4}$/,
      message: "Please enter a valid phone number",
    },
    maxLength: {
      value: 12,
      message: "Please enter a valid phone number",
    },
    minLength: {
      value: 12,
      message: "Please enter a valid phone number",
    },
  },
]

const variant = { variant: "filled" }

export const fields = [
  {
    name: "fname",
    title: "First Name",
    type: "text",
    required: true,
    placeholder: "Please enter a valid first name",
    icon: icons[0],
    ...variant,
    validation: validations[0],
  },
  {
    name: "lname",
    title: "Last Name",
    type: "text",
    required: true,
    placeholder: "Please enter a valid last name",
    icon: icons[1],
    ...variant,
    validation: validations[1],
  },
  {
    name: "email",
    title: "Email",
    type: "email",
    required: true,
    placeholder: "you@youremail.com",
    icon: icons[2],
    ...variant,
    validation: validations[2],
  },
  {
    name: "phone",
    title: "Phone",
    type: "tel",
    required: true,
    placeholder: "xxx-xxx-xxxx",
    ariaDescribedby: "phone-helper-text",
    icon: icons[3],
    ...variant,
    validation: validations[3],
  },
]
