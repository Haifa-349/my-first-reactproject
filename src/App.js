import React from 'react';
import './App.css';
import BasicExample from  './component/header'
import Home  from './component/home'
import Skill from './component/skills'
import { Projects } from './component/projects';
import  Form1 from './component/form'
import Last from './component/last'

const App=()=>{
  return (
    <div>
      <BasicExample/>
      <Home/>
      <Skill/>
      <Projects/>
     <Form1/>
     <Last/>

    </div>

  )
};
export default  App;
