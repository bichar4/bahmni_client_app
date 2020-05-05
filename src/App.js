import React from "react";
import Person from "./components/persons/person";
import Encounter from './components/Observations/Encounter';
import logo from "./logo.svg";
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
    let uri = '/openmrs/ws/rest/v1/patient?q='+this.state.text;
    let h = new Headers();
    h.append("Accept", "application/json");
    let encoded = window.btoa("superman:Admin123");
    let auth = "Basic " + encoded;
    h.append("Authorization", auth);
    console.log(auth);
    console.log(`Patient: ${this.state.text}`)

    let req = new Request(uri, {
      method: "GET",
      headers: h,
      credentials: "same-origin"
    });
    fetch(req)
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            user: result.results,
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
