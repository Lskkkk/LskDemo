import React, { Component } from 'react';
import './App.css';
import { na } from './require/normalRequire';
import { la } from './require/lazyRequire';
import Content from './Content';

const App = () => {
    return (
        <div className="App">
            <header className="App-header">
                <Content />
                {na}
                {la}
            </header>
        </div>
    );
};

export default App;
