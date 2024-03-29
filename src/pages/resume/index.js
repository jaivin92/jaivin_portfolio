import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { meta } from "../../content_option";
import pdf from "../../jaivin_developer.pdf";

export const Resume = () => {
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> Resume | {meta.title} </title>{" "}
          <meta name="description" content={meta.description} />
        </Helmet>
    
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4"> Resume </h1>{" "}
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <iframe src={pdf} title="Jaivin Resume" frameborder="0" 
            marginheight="0" 
            marginwidth="0" 
            width="100%" 
            height="600" />
      </Container>
    </HelmetProvider>
  );
};
