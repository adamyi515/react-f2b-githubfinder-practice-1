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
            <Routes>
                <Route path='/' element={<HomePage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App;