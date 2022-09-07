import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import * as S from './Style/AppStyle.js';

import List from './components/List';
import Home from './components/Home';
import Form from './components/Form';

export default function App() {
  return(
    <S.Section>
      <Router>
        <S.GlobalStyle/>
        <S.Menu>
          <Link className='li' to={"/"}>Home</Link>
          <Link to={"/lista"}>List</Link>
          <Link to={"/formulario"}>Formulário</Link>
        </S.Menu>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/lista' element={<List />}/>
          <Route path='/formulario' element={<Form />} />
          <Route />
        </Routes>
      </Router>
    </S.Section>
  )
}