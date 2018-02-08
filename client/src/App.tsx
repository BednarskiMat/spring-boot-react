import * as React from 'react';
import './App.css';
import BeerList from './components/BeerList';

class App extends React.Component<{}, any> {

    render() {

        return (
            <div className="App">
               < BeerList/>
            </div>
        );
    }}
export default App;
