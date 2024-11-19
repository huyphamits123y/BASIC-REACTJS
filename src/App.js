import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import React from 'react';
import { routes } from './routes';
import { useState, useReducer, useRef } from 'react';


function App() {
  return (
    <div>
      <Router>
        <Routes>

          {routes.map((route) => {
            const Page = route.page;

            return (
              <Route key={route.path} path={route.path} element={

                <Page />


              } />
            );
          })}
        </Routes>
      </Router>
    </div>
  )

}

export default App;
