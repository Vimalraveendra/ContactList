import React from 'react'
import './App.css';

import SearchField from "../Components/searchField/searchField"

class App extends React.Component{
  state={
    dataList:[]
  }

  // async componentDidMount(){
  //     const response = await fetch(`https://teacode-recruitment-challenge.s3.eu-central-1.amazonaws.com/users.json`)
  //    const data = await response.json()
  //  this.setState({dataList:data})
  // }
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <h1>Contacts</h1>
        </header>
        <SearchField/>
      </div>
    );

  }

}

export default App;
