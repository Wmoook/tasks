import React from "react";
import "./App.css";
import { Button, Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
function App(): JSX.Element {
    return (
        <div className="App">
            <header
                className="App-header"
                style={{ backgroundColor: "lightblue" }}
            >
                UD CISC275 with React Hooks and TypeScript, Adam Beck
            </header>
            <Container>
                <Row>
                    <Col>
                        {/* First column */}
                        <p>
                            Edit <code>src/App.tsx</code> and save. This page
                            will automatically reload. Hello World
                        </p>
                        <ul>
                            <li>1</li>
                            <li>2</li>
                            <li>3</li>
                        </ul>
                        <div
                            style={{
                                width: "100px",
                                height: "100px",
                                backgroundColor: "red"
                            }}
                        ></div>
                    </Col>
                    <Col>
                        {/* Second column */}
                        <img
                            src="../assets/images/pet-ada.jpg"
                            alt="A picture of my dog Ada"
                        />
                        <Button onClick={() => console.log("Hello World!")}>
                            Log Hello World
                        </Button>
                        <div
                            style={{
                                width: "100px",
                                height: "100px",
                                backgroundColor: "red"
                            }}
                        ></div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;
