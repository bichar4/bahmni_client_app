import React, { Component } from "react";
import EncounterService from "./Encounter.services";
class Encounter extends Component {

   state= {
        weightText:0,
        currentPatient:{}
    }

    componentDidMount(){
        const patient = this.props.currentUser;
        this.setState({currentPatient:patient})
    }
    handleSubmit= (e) => {
     e.preventDefault();
     console.log(this.state.weightText)
     console.log(this.state.currentPatient)
     EncounterService.postEncounter(this.state.weightText,this.state.currentPatient.uuid)
     .then(response =>{
        console.log(response)
        EncounterService.postVisit(response.patient.uuid,response.uuid,response.encounterDatetime)
     })
     .catch(error => console.log(error)) 

    }

    handleChange=(e) =>{
        this.setState({weightText:e.target.value});
    }
  render() {
      
    return (
      <div>
        <h1>Encounter Form</h1>
        <form onSubmit={this.handleSubmit}>
          <label>Weight</label>
          <input onChange={this.handleChange} />

          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default Encounter;
