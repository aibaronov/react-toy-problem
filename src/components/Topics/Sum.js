import React, {Component} from 'react'

class Sum extends Component{
    constructor(props){
        super(props);
        this.state = {
            number1: 0,
            number2: 0,
            sum: null
        }
        this.getVal1 = this.getVal1.bind(this);
        this.getVal2 = this.getVal2.bind(this);
        this.getSum = this.getSum.bind(this);
    }
    getVal1(event){
        this.setState({number1: event.target.value});
    }
    getVal2(event){
        this.setState({number2: event.target.value});
    }
    getSum(event){
        const num1 = Number(this.state.number1);
        const num2 = Number(this.state.number2);
        const sum = num1 + num2;
        this.setState({sum: sum});
    }
    render(){
        return(
            <div className='puzzleBox sumPB'>
                <h4>Sum</h4>
                <input className='inputLine' onChange={this.getVal1}></input>
                <input className='inputLine' onChange={this.getVal2}></input>
                <button className='confirmationButton' onClick={this.getSum}></button>
                <span className='resultsBox'>{JSON.stringify(this.state.sum)}</span>
            </div>
        )
    }
}

export default Sum;