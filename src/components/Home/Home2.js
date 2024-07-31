import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";



function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
            Hello! I'm <span className="purple">Vamsi </span>, a passionate and experienced <span className="purple">Software Developer</span> with a strong background in
             full-stack development and machine learning. With 2 years of hands-on 
            experience in building web applications and implementing Machine Learning algorithms based off buisiness needs, 
            I specialize in transforming complex problems into innovative solutions.
              <br />
              <br />I am fluent in classics like
              <i>
                <b className="purple"> Python and Typescript. </b>
              </i>
              <br />
              <br />
              I am deeply interested and skilled at developing &nbsp;
              <i>
                <b className="purple">Web Applications and Products </b> , as well as exploring advancements and creating solutions using{" "}
                <b className="purple">
                  Deep Learning.
                </b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
