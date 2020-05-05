
import React, { Component } from 'react';

class Person extends Component {

    render() {
        const { person } = this.props;
        return (
            <div onClick={ () => this.props.onPersonPress(person)}>
                <hr />
                <div className="card">
                    <h3 className="card-header">
                        {person.display}
                    </h3>
                    <div className="card-block">
                        <p className="card-text">{person.uuid}</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Person;