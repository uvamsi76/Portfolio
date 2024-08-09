import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Coursera from "../../Assets/Projects/coursera1.jpeg";
import paint from "../../Assets/Projects/paint.jpg";
import LinearRegression from "../../Assets/Projects/LinearRegression.png";
import power from "../../Assets/Projects/power.jpg";
import cart from "../../Assets/Projects/cart.jpg";
import malaria from "../../Assets/Projects/malaria.avif";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={power}
              isBlog={false}
              title="Power consumption prediction time series"
              description="● A time series model to predict the next day's energy consumption based on hourly usage, utilising the XGBoost regressor"
              techused="● Technologies used: XGBoost, MLforecast, Pandas, Statsmodels, scikit-learn"
              ghLink="https://github.com/uvamsi76/Power_Consumption_prediction_timeseries"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={malaria}
              isBlog={false}
              title="Malaria detection from blood sample "
              description="● Built a CNN model from scratch using TensorFlow to detect malaria-infected blood samples with the LeNet
                            architecture, achieving an accuracy of approximately 90% using both the Sequential and Functional APIs.
                            "
              techused="● Technologies used: TensorFlow, TensorFlow Datasets, Adam optimizer."
              ghLink="https://github.com/uvamsi76/Malaria_detection_from_blood_sample"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={LinearRegression}
              isBlog={false}
              title="LinearRegression with gradient-descent using only numpy "
              description="● Built a linear regression model from scratch using only NumPy, implementing gradient descent for weight
updates during model fitting.Performed matrix calculations for predictions and gradient updates with NumPy, while utilising Pandas for data
handling and Matplotlib for visualisation."
              techused="● Technologies used: Numpy."
              ghLink="https://github.com/uvamsi76/-from-scratch-LinearRegression-using-Gradient-decent-"             
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Coursera}
              isBlog={false}
              title="Dockerized clone of Coursera deployed in AWS"
              description="● Built a course selling application similar to Coursera, where users can sign up/login, enrol in/purchase courses, and admins can publish and edit courses."
              techused="● Technologies used: TypeScript,Next.js,Material-UI,Next-auth (OAuth),Recoil,JWT cookie-based auth,Express,PostgreSQL,Prisma,Zod,Turborepo,AWS EC2,and Nginx."
              ghLink="https://github.com/uvamsi76/Dockerized-Monorepo-of-code-era"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cart}
              isBlog={false}
              title="Digibuy An Ecommerce Website]"
              description="● Built a Frontend of Ecommerce Website where you can signin,signup,browse products through different
categories, Add products to cart.I built this using a fake apistore in 4 days."
techused="● Technologies used: Typescript,React,Tailwind Css"
              ghLink="https://github.com/uvamsi76/E-Commerce-Job-"
              demoLink="https://digibuy.vercel.app/" 
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={paint}
              isBlog={false}
              title="Paint Like Website"
              description="● Built a paint like website where you can draw something using mouse"
              techused="● Technologies used: Typescript,React,Tailwind Css, canvas api"
              ghLink="https://github.com/uvamsi76/paint"
              demoLink="https://paint-beta.vercel.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
