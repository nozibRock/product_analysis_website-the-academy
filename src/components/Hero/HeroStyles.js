import styled from "styled-components";
import { Button } from "../../globalStyles";

import heroImg from "../../0a0b1cf0cc8eef0b91299b92094427eb.jpg";

export const HeroSection = styled.section`
  height: 100vh;
  background-position: center;
  background-size: cover;
  padding-top: clamp(70px, 25vh, 220px);
  box-shadow: inset 0 0 0 1000px rgba (0, 0, 0, 0.2);
`;

export const HeroImage = styled.div`
  background-image: url(${heroImg});
  object-fit: cover;
  width: 100%;
  height: 100%;
  top: 0;
  position: absolute;
  z-index: -1;
`;

export const HeroText = styled.p`
  margin-bottom: 35px;
  font-size: clamp(0.9rem, 1.5vw, 1.3rem);
  line-height: 24px;
  text-align: center;
  letter-spacing: 2px;
  color: ##747481;
`;

export const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-flow: wrap;
  gap: 0.5rem;
`;

export const HeroButton = styled(Button)`
  color: #fff;
  &:before {
    background: #5865f5;
    height: 500%;
  }
  &:hover:before {
    height: 0%;
  }
  &:hover {
    color: white;
  }
`;
