import React from "react";
import "./App.css";
import Container from "@material-ui/core/Container";
import Counter from "./components/Counter";

function App() {
    return (
        <div className="App">
            <Container maxWidth="xs">
                <Counter />
            </Container>
        </div>
    );
}

export default App;
