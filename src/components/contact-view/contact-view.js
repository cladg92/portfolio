import React from "react";
import {
  Button,
  Flex,
  View,
  useTheme,
  TextField,
  TextAreaField,
  Card,
} from "@aws-amplify/ui-react";

import { API } from "aws-amplify";
import { createCandidate } from "../../graphql/mutations";

import "./contact-view.css";

function ContactView() {
  const { tokens } = useTheme();

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const message = e.target.message.value;
    await API.graphql({
      query: createCandidate,
      variables: {
        input: {
          name,
          email,
          message,
        },
      },
    });
  };
  return (
    <div id="contact">
      <h1>Contact me</h1>
      <Flex justifyContent={"center"}>
        <View
          width={{ base: "70vw", large: "1000px" }}
          backgroundColor={tokens.colors.white}
          padding={tokens.space.medium}
          borderRadius={tokens.radii.medium}
          className="contact-form"
        >
          <Flex
            as="form"
            direction={"column"}
            onSubmit={handleFormSubmit}
            className="form"
          >
            <TextField
              required
              label="Your Name"
              name="name"
              placeholder="Milan Kundera"
            />
            <TextField
              label="Email"
              name="email"
              placeholder="you@email.com"
              type={"email"}
              required
            />
            <TextAreaField
              label="Message"
              name="message"
              placeholder="Enter your message"
              required
            />
            <View style={{ marginTop: tokens.space.medium }}>
              <Button type="submit">Send Message</Button>
            </View>
          </Flex>
        </View>
      </Flex>
    </div>
  );
}

export default ContactView;
