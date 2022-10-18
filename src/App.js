import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React from 'react'
import Home from './components/Home';
import About from './components/About';
import Post from './components/Post';
import SinglePost from './components/SinglePost';
import Projects from './components/Projects';
import NavBar from './components/NavBar';

function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/About' element={<About/>}/>
        <Route path='/Post' element={<Post/>}/>
        <Route path='/post/:slug' element={<SinglePost/>}/>
        <Route path='/Projects' element={<Projects/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
