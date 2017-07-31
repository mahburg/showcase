import React, {Component} from 'react';

import EvenAndOdd from '../Topics/EvenAndOdd';
import FilterObject from '../Topics/FilterObject';
import FilterString from '../Topics/FilterString';
import Palindrome from '../Topics/Palindrome';
import Sum from '../Topics/Sum';

class TopicBrowser extends Component {
    constructor(){
        super();
        this.state = {
            route: ''
        }
    }
    router(val){
        this.setState({
            route: val
        })
    }
    render(){
        return (
            <div>
                <div className='button-container'>
                    <button onClick={()=>this.router('even')} >Even-Odd</button>
                    <button onClick={()=>this.router('fObj')} >Filter-Object</button>
                    <button onClick={()=>this.router('fStr')} >Filter-String</button>
                    <button onClick={()=>this.router('pal')} >Palindrome</button>
                    <button onClick={()=>this.router('sum')} >Sum</button>
                </div>
                {
                    this.state.route =='even'? <EvenAndOdd/> : this.state.route == 'fObj' ? <FilterObject/> : this.state.route == 'fStr' ? <FilterString/> : this.state.route == 'pal' ? <Palindrome/> : this.state.route == 'sum' ? <Sum/> : null 
                }
                {/* <EvenAndOdd/>
                <FilterObject/>
                <FilterString/>
                <Palindrome/>
                <Sum/> */}
            </div>
        )
    }
}

export default TopicBrowser;