import React from 'react';
import './App.css';
import Header from './Header'
import Footer from './Footer'
import Main from './Main'
import data from './Data/data.json'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      importData: data,
      count:0
    }
  }
  
  render() {
    return (
      <>
        <Header />
        <Main importData = {this.state.importData} />
        <Footer />
      </>
    );
  }
}

export default App;

