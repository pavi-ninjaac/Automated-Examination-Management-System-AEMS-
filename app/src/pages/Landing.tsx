import React from 'react';
import { Button, Container } from 'react-bootstrap'

import CenterContainer from '../containers/CenterContainer';
import ProfIllustration from '../assets/images/professor.svg';

function Landing() {
  return (
    <Container fluid="md">
      <CenterContainer>
        <img src={ProfIllustration} style={{ display: 'block', minWidth: '30rem', maxWidth: '60%' }} alt="illustration" />
        <Button variant="outline-primary" size="lg">Register</Button>
      </CenterContainer>
    </Container>
  );
}

export default Landing;
