import React from 'react'
import './App.css';

import SearchField from "../Components/searchField/searchField"
import ContactsArray from "../Components/contactsArray/contactsArray"

class App extends React.Component{
  state={
    dataList:[],
    searchText:'',
    selectedContacts:[]
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

  filteredList =()=>{
    const {searchText,dataList} = this.state;
    return dataList.filter(contact=>{
      return contact.first_name.toLowerCase().includes(searchText.toLowerCase())||
      contact.last_name.toLowerCase().includes(searchText.toLowerCase())
    })
  }

  selectIndividualContact=(id)=>{
    let helperArray = this.state.selectedContacts

    if(helperArray.includes(id)){
      helperArray = helperArray.filter(itemId=>itemId!==id)
    }else{
      helperArray =[...helperArray,id]
    }
    this.setState({selectedContacts:helperArray})
  }
  
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <h1>Contacts</h1>
        </header>
        <SearchField searchChange={this.onSearchChange}/>
        <ContactsArray  dataList={this.filteredList()} selectedContacts={this.state.selectedContacts}
        selectIndividualContact={this.selectIndividualContact}
        />
      </div>
    );

  }

}

export default App;
