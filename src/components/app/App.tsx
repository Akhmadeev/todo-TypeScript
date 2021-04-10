import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import AboutPage from "../../pages/AboutPage";
import TodosPage from "../../pages/Todos.Page";
import Navbar from "../navbar/Navbar";

const App: React.FunctionComponent = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div className='container'>
          <Switch>
            <Route component={TodosPage} path='/' exact />
            <Route component={AboutPage} path='/about' />
          </Switch>
        </div>
      </BrowserRouter>
    </>
  );
};

export default App;
