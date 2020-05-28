import React, { FC } from 'react';
import Navbar from './Navbar';
import Header from './Header';
import Body from './Body';
import Footer from './Footer';

const App: FC = () => {
    return (
        <div className='app'>
        <h1 className="text-primary">Hello World</h1>
        <Navbar />
        <Header />
        <Body />
        <Footer />
        </div>
    )
}

export default App;