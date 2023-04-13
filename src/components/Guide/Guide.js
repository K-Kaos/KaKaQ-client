import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import guidePic from "../../Assets/Projects/survey.png";

function Guide() {
  return (
    <section>
      <Container fluid className="guide-section">
        <Particle />
        <Container className="guide-content">
          <Row>
          <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={guidePic}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
            <Col md={7} >
            <section class="dark:bg-gray-900">
                  <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16">
                      <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Create an online form as easy as creating a document</h1>
                      <p class="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-400">Easily select from multiple question types, 
                        create questions, and customize values.</p>
                      <div class="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
                          <a href="/survey" class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
                              Make Survey
                              <svg aria-hidden="true" class="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                          </a>
                          <a href="/signup" class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                              Sign Ups
                          </a>  
                      </div>
                  </div>
              </section>
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
}

export default Guide;
