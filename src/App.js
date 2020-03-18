import React from 'react';
import './App.css';

// Basic components
import { Home } from './components/Home';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Navigation } from './components/Navigation';
// import { PageNotFound } from './components/PageNotFound';

// Employee Components
import { Employees } from './components/employees-components/Employees';
import { EmployeeDetails } from './components/employees-components/EmployeeDetails';

// Router component
import { BrowserRouter as Router, /*Switch,*/ Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <div className="custom-header-wrapper">
          <Navigation></Navigation>
        </div>
        <div className="custom-body-wrapper">
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/employees" component={Employees} />
          <Route path="/employee/:id" component={EmployeeDetails} />
        </div>
      </div>
    </Router>
  );
}

export default App;
