import React from 'react';
import "../src/components/styles/styles.scss"
import Formulario from "./components/Pages/Formulario"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MainMenu from './components/Organisms/MainMenu';
import Historial from './components/Pages/Historial';
import Home from './components/Pages/Home';
import Users from './components/Pages/Users';
import Courses from './components/Pages/Courses';
import Course from './components/Pages/Course';

const AppRoutes = () => (
  <Router>
    <MainMenu />
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/cursos/:id" component={Course} />
      <Route path="/cursos"
        component={Courses} />
      <Route path="/historial/:valor" component={Historial} />
      <Route path="/usuarios" component={Users} />
      <Route path="/formulario" component={() => <Formulario name="" />} />
      <Route component={() => (
        <div className="ed-grid">
          <h1>Error 404</h1>
          <span>Página no encontrada</span>
        </div>
      )} />
    </Switch>
  </ Router>
)
export default AppRoutes;