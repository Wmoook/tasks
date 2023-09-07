import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App(): JSX.Element {
    const logHelloWorld = () => {
        console.log("Hello World!");
    };

    return (
        <div className="App" style={{ color: "red" }}>
            {}
            <div style={{ border: "1px solid blue", padding: "4px" }}>
                this will be surrounded by a border and padding.
            </div>
            {}
            <header
                className="App-header"
                role="banner"
                style={{ backgroundColor: "blue" }}
            >
                <h1>UD CISC275 with React Hooks and TypeScript, Adam Beck</h1>
            </header>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div
                            style={{
                                width: "50px",
                                height: "50px",
                                backgroundColor: "red"
                            }}
                        ></div>
                        <p>
                            Edit <code>src/App.tsx</code> and save. This page
                            will automatically reload. Hello World
                        </p>
                        <ul role="list">
                            <li>1</li>
                            <li>2</li>
                            <li>3</li>
                        </ul>
                        <button
                            className="btn btn-primary"
                            type="button"
                            onClick={logHelloWorld}
                        >
                            Log Hello World
                        </button>
                    </div>
                    <div className="col">
                        <div
                            style={{
                                width: "50px",
                                height: "50px",
                                backgroundColor: "red"
                            }}
                        ></div>
                        <img
                            src="https://i.gyazo.com/ee7f8d29a6dda5f4d1e95b21c2402a94.png"
                            alt="picture"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
