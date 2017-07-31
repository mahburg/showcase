import React, {Component} from 'react';

class EvenAndOdd extends Component {
    constructor(){
        super();
        this.state = {
            evenArray: [],
            oddArray: [],
            evenString: [],
            oddString: [],
            userInput: ''
        }
    }
    seperate(){
        if (this.state.userInput){
            let arr = this.state.userInput.split(',');
            for (let i = 0; i < arr.length; i++){
                if (arr[i] % 2){
                    this.state.oddArray.push(arr[i]);
                } else {
                    this.state.evenArray.push(arr[i]);
                }
            }
            this.setState({
                userInput: '',
                oddString: this.state.oddArray.join(', '),
                evenString: this.state.evenArray.join(', ')
            })
        }
    }
    render(){
        return (
            <div className="puzzleBox evenAndOddPB">
                <h4> Evens and Odds </h4>
                <input className="inputLine" value={this.state.userInput} onChange={(e)=>this.setState({userInput:e.target.value})}></input>
                <button className="confirmationButton" onClick={()=>this.seperate()}> Split </button>
                <span className="resultsBox"> {this.state.oddString} </span>
                <span className="resultsBox"> {this.state.evenString} </span>
            </div>
        )
    }
}

export default EvenAndOdd;