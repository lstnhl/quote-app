import React from 'react'
import {BrowserRouter} from 'react-router-dom'
import Content from 'pages/content/content'
import Navbar from 'pages/content/navbar'
import Footer from 'pages/footer/footer';
import './App.css'

const App = () => {
    return (
        <div className='container'>
            <BrowserRouter>
                <Navbar/>
                <Content/>
                <Footer/>
            </BrowserRouter>
        </div>
    )
}

export default App