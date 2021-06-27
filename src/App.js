import React from 'react';
import './App.css';
import Header from './Header'
import Footer from './Footer'
import Main from './Main'
import data from './Data/data.json'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
    jsonData : data
      
    }

  }
  render() {
    return (
      <>
        <Header />
        <Main importData = {this.state.jsonData} />
        <Footer />
      </>
    );
  }
}

export default App;

