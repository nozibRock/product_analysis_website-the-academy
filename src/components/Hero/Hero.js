import React from "react";
import { Link } from "react-router-dom";
import { Button, Container, MainHeading } from "../../globalStyles";
import {
  HeroImage,
  HeroSection,
  HeroText,
  ButtonWrapper,
  HeroButton,
} from "./HeroStyles";

const Hero = () => {
  return (
    <div>
      <HeroSection>
        <HeroImage />
        <Container>
          <HeroText>WH-1000XM4</HeroText>
          <MainHeading>ONLY MUSIC.</MainHeading>
          <MainHeading>NOTHING ELSE.</MainHeading>
          <HeroText>
            It’s just you and your music with the WH-1000XM4 headphones. The
            easy way to enjoy less noise and even purer sound, with smart
            listening technology that automatically personalises your
            experience.
          </HeroText>
          <ButtonWrapper>
            <Link to="signup">
              <Button>Get Started</Button>
            </Link>
            <HeroButton>Find More</HeroButton>
          </ButtonWrapper>
        </Container>
      </HeroSection>
    </div>
  );
};

export default Hero;
