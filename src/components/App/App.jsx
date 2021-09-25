import React from 'react';
import Header from '../Header/Header';
import ResultsContainer from '../ResultsContainer/ResultsContainer';
import SearchBox from '../SearchBox/SearchBox';
import './App.css';

const name = require('@rstacruz/startup-name-generator');

class App extends React.Component {
    state = {
        headText: 'Name It!',
        headerExpanded: true,
        suggestedNames: [],
    };

    handleInputChange = (inputText) => {
        name(inputText);
        this.setState({
            headerExpanded: !inputText,
            suggestedNames: inputText ? name(inputText) : [],
        });
    };

    render() {
        return (
            <div>
                <Header
                    headerExpanded={this.state.headerExpanded}
                    headTitle={this.state.headText}
                />

                <SearchBox onInputChange={this.handleInputChange} />

                <ResultsContainer suggestedNames={this.state.suggestedNames}/>
            </div>
        );
    }
}

// function App(){
//     return <h1>This is functional component</h1>
// }

export default App;
