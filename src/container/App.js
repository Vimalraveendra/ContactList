import React from 'react'
import './App.css';

import SearchField from "../Components/searchField/searchField"
import ContactsArray from "../Components/contactsArray/contactsArray"

class App extends React.Component{
  state={
    dataList:[],
    searchText:''
  }

  async componentDidMount(){
      const response = await fetch(`https://teacode-recruitment-challenge.s3.eu-central-1.amazonaws.com/users.json`)
     const data = await response.json()
   this.setState({dataList:data})
  }

  onSearchChange=(event)=>{
    const target = event.target.value;
    this.setState({searchText:target})
    
  }
  
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <h1>Contacts</h1>
        </header>
        <SearchField searchChange={this.onSearchChange}/>
        <ContactsArray  dataList={this.state.dataList}/>
      </div>
    );

  }

}

export default App;
