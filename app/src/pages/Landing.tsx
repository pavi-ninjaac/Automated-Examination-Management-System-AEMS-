import React from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap'

import CenterContainer from '../containers/CenterContainer';
import ProfIllustration from '../assets/images/professor.svg';

function Landing() {
  return (
    <Container fluid="md">
      <CenterContainer>
        <Row>
          <Col sm={12}>
            <img src={ProfIllustration} style={{ display: 'block', minWidth: '30rem', maxWidth: '60%' }} alt="illustration" />
          </Col>
          <Col sm={12}>
            <Button variant="outline-primary" size="lg">Register</Button>
          </Col>
        </Row>
      </CenterContainer>
    </Container>
  );
}

export default Landing;
