import React from "react";
import Person from "./components/persons/person";
import Encounter from './components/Observations/Encounter';
import NavbarComponent from './components/Navbar/NavbarComponent';
import SearchComponent from './components/SearchComponent/SearchComponent';
import logo from "./logo.svg";
import * as patientServices from './services/patient';
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      text:'',
      error: null,
      isLoaded: false,
      user: [],
      userpage:true,
      currentUser:{}
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.testClick = this.testClick.bind(this);
  }
  handleChange(e) {
    this.setState({text:e.target.value});
    
  }
  handleSubmit(e) {
    e.preventDefault();
     patientServices.SearchPatients(this.state.text)
      .then(
       
        (result) => {
          console.log(result)
          this.setState({
            isLoaded: true,
            user: result.data.results,
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
  }

  testClick = (person)=>{
    this.setState({
      userpage:false,
      currentUser:person
    })
  }
  componentDidMount() {

  }
  render() {
    const { error, isLoaded, user } = this.state;
    if(error){
      return <div> Error : {error}</div>
    }
   
      return (
        
        this.state.userpage && 
        <div>
          <form onSubmit={this.handleSubmit}>
            <label>Search Patient</label>
            <input
              id="new-todo"
              onChange={this.handleChange}
              value={this.state.text}
            />
            <button>Search</button>
          </form>
          <ul>
            {user.map((user) => (
              <Person person={user} key={user.uuid} onPersonPress={this.testClick} />
            ))}
          </ul>
        </div>
        || 
        
          <Encounter currentUser={this.state.currentUser}/>
      
      );
    }
  }

export default App;
