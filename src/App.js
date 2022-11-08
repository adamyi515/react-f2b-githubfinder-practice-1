import React from 'react';

// React router dom
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Components
import Header from './components/header/header.component';

// Pages
import HomePage from './pages/home-page/home-page.component';

const App = () => {
    return(
        <BrowserRouter>
            <Header />
            <div className='container'>
                <Routes>
                    <Route path='/' element={<HomePage />} />
                </Routes>
            </div>
        </BrowserRouter>
    )
}

export default App;