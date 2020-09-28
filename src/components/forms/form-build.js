import React, { useRef } from "react"
import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  Input,
  InputGroup,
  InputLeftAddon,
  Stack,
  Textarea,
} from "@chakra-ui/core"

import { EmailIcon, PhoneIcon } from "@chakra-ui/icons"

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
            id="email"
            // isInvalid={() => formRef.current.reportValidity()}
          >
            <InputGroup>
              <InputLeftAddon children={<EmailIcon color="gray.400" />} />
              <Input
                type="email"
                id="email"
                variant="outline"
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
          <FormControl isRequired id="phone">
            <InputGroup>
              <InputLeftAddon children={<PhoneIcon color="gray.400" />} />
              <Input
                type="phone"
                id="phone"
                variant="outline"
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
        <Stack spacing={12} mb={12}>
          <FormControl id="firstName" isRequired w="100%">
            <Input
              // isFullWidth
              type="firstName"
              id="firstName"
              variant="filled"
              name="firstName"
              aria-describedby="firstName-helper-text"
              placeholder="First Name"
              size="lg"
              rounded={"10px"}
              title="please provide a first name"
              px={4}
            />
            <FormHelperText id="firstName-helper-text" float="right">
              please enter a valid first name.
            </FormHelperText>
          </FormControl>
          <FormControl id="lastName" isRequired w="100%" mb="12">
            <Input
              // isFullWidth
              type="lastName"
              id="lastName"
              variant="filled"
              name="lastName"
              aria-describedby="lastName-helper-text"
              placeholder="Last Name"
              size="lg"
              rounded={"10px"}
              title="please provide a last name"
              px={4}
            />
            <FormHelperText id="lastName-helper-text" float="right">
              please enter a valid last name.
            </FormHelperText>
          </FormControl>
        </Stack>
        <FormControl id="msg" w="100%" mb="12" pb="12">
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
          leftIcon={<EmailIcon />}
          colorScheme="blue"
          variant="outline"
          float="right"
        >
          Submit
        </Button>
      </Box>
    </>
  )
}
