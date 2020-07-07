import React from 'react';

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import CenterContainer from '../containers/CenterContainer';
import ProfIllustration from '../assets/images/professor.svg';


function Landing() {
  return (
    <Container fluid="md">
      <CenterContainer>
        <Row>
          <Col sm={12} md={6} style={{ overflow: 'hidden' }}>
            <img src={ProfIllustration} style={{ width: '100%', objectFit: 'cover' }} alt="illustration" />
          </Col>
          <Col sm={12} md={6}>
            <Button variant="outline-primary" size="lg">Register</Button>
          </Col>
        </Row>
      </CenterContainer>
    </Container>
  );
}

export default Landing;


/*
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
*/
