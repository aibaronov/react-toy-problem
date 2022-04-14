import React, {Component} from 'react'

class EvenAndOdd extends Component{
    constructor(props){
        super(props);
        this.state = {
            evenArray: [],
            oddArray: [],
            userInput: ''
        }
        this.updateInput = this.updateInput.bind(this);
        this.filterInput = this.filterInput.bind(this);
    }
    updateInput(event){
        this.setState({userInput:event.target.value});
    }
    filterInput(event){
        let input = this.state.userInput.split(',');
        for(let i = 0; i < input.length; i++){
            if(input[i]%2 === 0){
                this.state.evenArray.push(input[i]);
            }
            else if(input[i]%2 !== 0){
                this.state.oddArray.push(input[i]);
            }
        }
        let evenDisplay = document.querySelector('#even-array');
        evenDisplay.innerHTML = `${this.state.evenArray}`
        let oddDisplay = document.querySelector('#odd-array');
        oddDisplay.innerHTML = `${this.state.oddArray}`
        event.preventDefault();
    }
    render(){
        return(
            <div className='puzzleBox evenAndOddPB'>
                <h4>Evens and Odds</h4>
                <input className='inputLine' onChange={this.updateInput}></input>
                <button className='confirmationBox' onClick={this.filterInput}></button>
                <span className='resultsBox' id='even-array'></span>
                <span className='resultsBox' id='odd-array'></span>
            </div>
        )
    }
}

export default EvenAndOdd;