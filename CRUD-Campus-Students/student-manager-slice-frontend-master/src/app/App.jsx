import React from 'react';
import './App.css';
import { AllStudentsContainer, AddStudentForm, AllCampusesContainer } from "../components/containers";

// reminder: be mindful of what you are rendering...when you render a container, that container also renders the corresponding view;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello World!</h1>
        <AllStudentsContainer />
        <AddStudentForm />
        <br></br>
        <AllCampusesContainer />
      </header>
    </div>
  );
}

export default App;
