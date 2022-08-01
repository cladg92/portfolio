import React from "react";
import {
  Flex,
  View,
  useTheme,
  TextField,
  TextAreaField,
} from "@aws-amplify/ui-react";
import { Button } from "react-bootstrap";

import beeater from "../../assets/glen-carrie.jpg";

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
    e.target.reset();
    alert("Thank you for getting in touch! The message was successfully sent.");
  };
  return (
    <div id="contact">
      <h1>Contact me</h1>
      <Flex justifyContent={"center"}>
        <View
          width={{ base: "95vw", large: "1000px" }}
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
              <Button
                className="resume-button"
                variant="outline-dark"
                type="submit"
              >
                Submit
              </Button>
            </View>
          </Flex>
        </View>
      </Flex>
      <img src={beeater} alt="bee-eater" className="beeater" />
    </div>
  );
}

export default ContactView;
