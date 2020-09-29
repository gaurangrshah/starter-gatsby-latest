import { useForm } from "react-hook-form"
import React, { useEffect, useRef, useState } from "react"
import {
  Box,
  Button,
  FormErrorMessage,
  FormLabel,
  FormControl,
  Input,
  InputGroup,
  InputLeftElement,
  VisuallyHidden,
} from "@chakra-ui/core"

import { useInputAutofill } from "../../hooks/use-input-autofill"
import { EmailIcon } from "@chakra-ui/icons"
//https://cobwwweb.com/how-to-use-netlify-forms-with-gatsby

export const HookForm = ({
  defaultValues = { fname: "", lname: "", email: "", phone: "" },
  children,
  onSubmit,
}) => {
  const methods = useForm({
    mode: "onChange",
    defaultValues,
  })
  const { handleSubmit } = methods

  const [isSubmitting, setIsSubmitting] = useState(false)
  function onSubmit(values) {
    setIsSubmitting(true)
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2))
      setIsSubmitting(false)
    }, 1000)
  }
  const formRef = useRef(null)
  useInputAutofill()
  return (
    <>
      <Box
        as={"form"}
        position="relative"
        pb={12}
        ref={formRef}
        name="contact"
        data-netlify
        data-netlify-honeypot="bot-field"
        method="POST"
        action="./success"
        onSubmit={handleSubmit(onSubmit)}
        textAlign="right"
      >
        <Input type="hidden" name="bot-field" />
        <Input type="hidden" name="form-name" value="contact" />
        {React.Children.map(children, child => {
          return child.props.name
            ? React.createElement(child.type, {
                ...{
                  ...child.props,
                  register: methods.register,
                  errors: methods.errors,
                  key: child.props.name,
                },
              })
            : child
        })}
        <Button
          mt={4}
          colorScheme="blue"
          leftIcon={<EmailIcon />}
          isLoading={isSubmitting}
          type="submit"
        >
          Submit
        </Button>
      </Box>
    </>
  )
}

export function CHookInput({
  name,
  title,
  placeholder,
  register,
  errors,
  validation,
  icon,
  ...rest
}) {
  const isErrorRef = useRef()
  useEffect(() => {
    isErrorRef.current =
      errors[name]?.ref?.id?.toString() === name.toString() &&
      errors[name].message
    return () => {}
  }, [errors])
  const { required, minLength, maxLength, pattern } = validation
  return (
    <FormControl id={name} isInvalid={isErrorRef?.current} mb={6}>
      <VisuallyHidden>
        <FormLabel
          htmlFor={name}
          isInvalid={isErrorRef?.current}
          textTransform="capitalize"
        >
          {title}
        </FormLabel>
      </VisuallyHidden>
      <InputGroup>
        {icon && <InputLeftElement children={icon} />}
        <Input
          name={name}
          title={title}
          placeholder={placeholder}
          ref={register(validation)}
          required={required && required}
          minLength={minLength && minLength?.value}
          maxLength={maxLength && maxLength?.value}
          {...rest}
        />
      </InputGroup>
      <FormErrorMessage>
        {isErrorRef?.current && isErrorRef?.current}
      </FormErrorMessage>
    </FormControl>
  )
}
