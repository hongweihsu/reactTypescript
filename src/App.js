import logo from './logo.svg';
import {Component} from "react";
import './App.css';
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      monsters: [],
      searchField: '',
      emailSearchField: '',
      searchType: '',
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => response.json())
        .then((users) => this.setState(() => {
          return {monsters: users};
        }));
  }

  onTypeChange = (event) => {
    let searchType =  document.querySelector('input[name="searchType"]:checked').value
    console.log('ss', searchType)
    this.setState(()=> {
      return {searchType};
    });
  }

  onSearchChange = (event) => {
    if (this.state.searchType === 'name' || this.state.searchType === '') {
      const searchField = event.target.value.toLocaleLowerCase();
      this.setState(() => {
        return {searchField};
      });
    }
  };

  onEmailSearchChange = (event) => {
    if (this.state.searchType === 'email') {
      const emailSearchField = event.target.value.toLocaleLowerCase();
      this.setState(() => {
        return {emailSearchField};
      });
    }
  };

  render(){
    const {monsters, searchField, emailSearchField, searchType} = this.state;
    const {onSearchChange, onEmailSearchChange, onTypeChange} = this;
    const filteredMonsters = monsters.filter((monster) => {
      if (searchType === 'name' || searchType === ''){
        return monster.name.toLocaleLowerCase().includes(searchField);
      }else if (searchType === 'email'){
        return monster.email.toLocaleLowerCase().includes(emailSearchField);
      }
    })
    console.log('fm', filteredMonsters)
    return(
        <div className='App'>
          <h1 className='app-title'>Hello Friends</h1>
          <div className='search-container'>
            <div className='search-item'>
              <input type="radio" id="byName" name="searchType" value="name" onClick={onTypeChange}/>
              <SearchBox className='name-search-box' onChange = {onSearchChange}></SearchBox>
            </div>
            <div className='search-item'>
              <input type="radio" id="byEmail" name="searchType" value="email" onClick={onTypeChange}/>
              <SearchBox className='email-search-box' onChange = {onEmailSearchChange}></SearchBox>
            </div>
          </div>

          <CardList monsters={filteredMonsters} ></CardList>
        </div>
    );
  }
}

export default App;
