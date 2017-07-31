import React, {Component} from 'react';

class Sum extends Component {
    constructor(){
        super()
        this.state = {
            num1: '',
            num2: '',
            sum: ''
        }
    }
    handleChange1(val){
        this.setState({
            num1: val
        })
    }
    handleChange2(val){
        this.setState({
            num2: val
        })
    }
    add(){
        this.setState({
            sum: this.state.num1*1 + this.state.num2*1
        })
    }
    render(){
        return (
            <div className="puzzleBox sumPB">
                <h4> Sum </h4>
                <input className="inputLine" type="number" onChange={(e)=>this.handleChange1(e.target.value)}></input>
                <input className="inputLine" type="number" onChange={(e)=>this.handleChange2(e.target.value)}></input>
                <button className="confirmationButton" onClick={()=>this.add()}> Add </button>
                <span className="resultsBox">{this.state.sum}</span>
            </div>
        )
    }
}

export default Sum;