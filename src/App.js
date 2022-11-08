import React from 'react';

// React router dom
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Components
import Header from './components/header/header.component';

// Pages
import HomePage from './pages/home-page/home-page.component';

// Context
import { GithubProvider } from './context/github.context';

const App = () => {
    return(
        <GithubProvider>
            <BrowserRouter>
                <Header />
                <div className='container'>
                    <Routes>
                        <Route path='/' element={<HomePage />} />
                    </Routes>
                </div>
            </BrowserRouter>
        </GithubProvider>
    )
}

export default App;