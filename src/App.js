import React, { Component } from 'react';
import './App.css';
import Layout from './Components/Layout';
class App extends Component  {
  state = {
    data: [],
  }
  componentDidMount() {
    fetch("https://api.github.com/repos/alpinejs/alpine/pulls")
      .then(res => res.json())
      .then(responseData => {
        console.log(responseData)
        let dataModel = responseData
        this.setState({
          data:dataModel
        })        
      })
      .catch(error => console.log(error))
  }
  render() {
    const { data } = this.state;
    return (
      <div className="App" onLoad={this.fetchAllPrs}>
        <h2>Pull Requests Finder App</h2>
        <Layout details={data}/>
      </div>
    );
  }
}

export default App;
