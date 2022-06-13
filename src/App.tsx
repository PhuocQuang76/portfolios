import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';

import About from "./pages/about/About";
import Skills from "./pages/skills/SkillsList";
import Education from "./pages/education/Education";
import Experience from "./pages/experience/Experience"
import Contact from "./pages/contact/Contact";
import SideBar from "./sidebar/SideBar";

function App() {

  return (
          <SideBar>
              <Switch>
                  <Route path='/' exact>
                      <About />
                  </Route>

                  <Route path='/skills'>
                      <Skills />
                  </Route>

                  <Route path='/education'>
                      <Education />
                  </Route>

                  <Route path='/experience'>
                       <Experience />
                  </Route>

                  <Route path='/contact'>
                      <Contact />
                  </Route>
                  </Switch>
          </SideBar>




  );
}

export default App;
