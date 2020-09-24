import React, { useRef } from "react"
import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  Icon,
  Input,
  InputGroup,
  InputLeftAddon,
  Stack,
  Textarea,
} from "@chakra-ui/core"

//https://cobwwweb.com/how-to-use-netlify-forms-with-gatsby

export const FormBuild = () => {
  const formRef = useRef(null)

  // const handleSubmit = (e) => {
  //   e.preventDefault()
  //   const isValid = formRef.current.reportValidity()
  //   let formObj;
  //   if (isValid) {
  //     formObj = formRef.current
  //   }
  //   console.log({
  //     isValid,
  //     ...formObj
  //   })
  // }
  return (
    <>
      <Box
        as={"form"}
        position="relative"
        pb={12}
        ref={formRef}
        // onSubmit={e => e.preventDefault()}
        name="contact"
        data-netlify
        data-netlify-honeypot="bot-field"
        method="POST"
        action="./success"
      >
        <Stack w="100%" spacing={12} mb="8">
          <Input type="hidden" name="bot-field" />
          <Input type="hidden" name="form-name" value="contact" />
          <FormControl
            isRequired
            isInvalid={() => formRef.current.reportValidity()}
          >
            <InputGroup>
              <InputLeftAddon
                children={<Icon name="email" color="gray.400" />}
              />
              <Input
                type="email"
                id="email"
                name="email"
                placeholder="you@youremail.com"
                size="lg"
                pattern="[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+"
                title="you@youremail.com"
              />
            </InputGroup>
            <FormHelperText id="email-helper-text" float="right">
              please enter a valid email address.
            </FormHelperText>
          </FormControl>
          <FormControl isRequired>
            <InputGroup>
              <InputLeftAddon
                children={<Icon name="phone" color="gray.400" />}
              />
              <Input
                type="phone"
                id="phone"
                name="phone"
                aria-describedby="phone-helper-text"
                placeholder="XXX-XXX-XXXX"
                size="lg"
                maxLength={12}
                minLength={12}
                pattern="^\d{3}-\d{3}-\d{4}$"
                title="XXX-XXX-XXXX"
              />
            </InputGroup>
            <FormHelperText id="phone-helper-text" float="right">
              please enter a valid phone number.
            </FormHelperText>
          </FormControl>
        </Stack>
        <Stack isRequired spacing={12} mb={12}>
          <FormControl isRequired w="100%">
            <Input
              isFullWidth
              type="firstName"
              id="firstName"
              name="firstName"
              aria-describedby="firstName-helper-text"
              placeholder="First Name"
              size="lg"
              variant="flushed"
              rounded={"10px"}
              title="please provide a first name"
              px={4}
            />
            <FormHelperText id="firstName-helper-text" float="right">
              please enter a valid first name.
            </FormHelperText>
          </FormControl>
          <FormControl isRequired w="100%" mb="12">
            <Input
              isFullWidth
              type="lastName"
              id="lastName"
              name="lastName"
              aria-describedby="lastName-helper-text"
              placeholder="Last Name"
              size="lg"
              variant="flushed"
              rounded={"10px"}
              title="please provide a last name"
              px={4}
            />
            <FormHelperText id="lastName-helper-text" float="right">
              please enter a valid last name.
            </FormHelperText>
          </FormControl>
        </Stack>
        <FormControl w="100%" mb="12" pb="12">
          <Textarea
            id="msg"
            name="msg"
            placeholder="What can we help you with?"
            size="lg"
            height="200px"
          />
          <FormHelperText id="lastName-helper-text" float="right">
            please enter your message
          </FormHelperText>
        </FormControl>
        <Button
          type="submit"
          leftIcon="email"
          variantColor="blue"
          variant="outline"
          float="right"
        >
          Submit
        </Button>
      </Box>
    </>
  )
}
