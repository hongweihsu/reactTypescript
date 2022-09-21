import {ChangeEvent, ChangeEventHandler, Component} from "react";
import './App.css';
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";
import {getData} from "./utils/data.utils";

export type Friend = {
  id: string;
  name: string;
  email: string;
  phone: string;
  address: {city: string, street: string};
  company: {name: string};
}

type AppState = {
  friends: Friend[];
  searchField: string;
  emailSearchField: string;
  searchType: string;
};

class App extends Component<any, AppState> {
  constructor(props:any) {
    super(props);

    this.state = {
      friends: [],
      searchField: '',
      emailSearchField: '',
      searchType: '',
    };
  }
  componentDidMount() {
    const fetchContact = async () => {
      await getData<Friend[]>("https://jsonplaceholder.typicode.com/users")
          .then( contacts => this.setState(()=>{
        return {friends: contacts}
      }))
    }
    fetchContact();
  }

  onTypeChange = () => {
    let searchType =  (document.querySelector('input[name="searchType"]:checked')as HTMLInputElement).value
    console.log('ss', searchType)
    this.setState(()=> {
      return {searchType};
    });
  }

  onSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (this.state.searchType === 'name' || this.state.searchType === '') {
      const searchField = event.target.value.toLocaleLowerCase();
      this.setState(() => {
        return {searchField};
      });
    }
  };

  onEmailSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (this.state.searchType === 'email') {
      const emailSearchField = event.target.value.toLocaleLowerCase();
      this.setState(() => {
        return {emailSearchField};
      });
    }
  };

  render(){
    const {friends, searchField, emailSearchField, searchType} = this.state;
    const {onSearchChange, onEmailSearchChange, onTypeChange} = this;
    const filteredFriends: Friend[] = friends.filter((friend: Friend) => {
      if (searchType === 'name' || searchType === ''){
        return friend.name.toLocaleLowerCase().includes(searchField);
      }else if (searchType === 'email'){
        return friend.email.toLocaleLowerCase().includes(emailSearchField);
      }
    })
    console.log('fm', filteredFriends)
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

          <CardList friends={filteredFriends} ></CardList>
        </div>
    );
  }
}

export default App;
