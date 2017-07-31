import React, {Component} from 'react';

class FilterObject extends Component {
    constructor(){
        super();
        this.state = {
        employees: [{name: 'Jimmy Joe',title: 'Hack0r',age: 12,},{name: 'Jeremy Schrader',age: 24,hairColor: 'brown'},{name: 'Carly Armstrong',title: 'CEO',}],
        userInput: '',
        filteredArray: []
        }
    }

    filter(){
        var out = [];
        for (let i = 0; i < this.state.employees.length; i++){
            if(this.state.employees[i].hasOwnProperty(this.state.userInput)){
                out.push(this.state.employees[i]);
            }
        }
        this.setState({
            filteredArray: out
        })
    }

    render(){
        return (
            <div className="puzzleBox filterObjectPB">
                <h4>Filter Object</h4>
                <span className="puzzleText">Original: {JSON.stringify(this.state.employees)}</span>
                <input className="inputLine" onChange={(e)=>this.setState({userInput:e.target.value})}/>
                <button className="confirmationButton" onClick={()=> this.filter()}>Filter</button>
                <span className="resultsBox filterObjectRB">Filtered: {JSON.stringify(this.state.filteredArray)}</span>
            </div>

        )
    }
}

export default FilterObject;