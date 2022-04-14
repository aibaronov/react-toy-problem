import React, {Component} from 'react'

class Palindrome extends Component{
    constructor(props){
        super(props);
        this.state = {
            userInput: '',
            palindrome: ''
        }
        this.getInput = this.getInput.bind(this);
        this.checkPalindrome = this.checkPalindrome.bind(this);
    }

    getInput(event){
        this.setState({userInput: event.target.value});
    }

    checkPalindrome(event){
        const input = this.state.userInput.toLowerCase();
        let counter = input.length - 1;

        for(let i = 0; i < input.length/2; i++){
            if(input[i] !== input[counter]){
                this.setState({Palindrome: 'False'});
                return;
            }
            else{
                counter--;
            }
        }
        this.setState({Palindrome: 'True'});
        return;
    }
    render(){
        return(
            <div className='puzzleBox filterStringPB'>
                <h4>Palindrome Check</h4>
                <input className='inputLine' onChange={this.getInput}></input>
                <button className='confirmationButton' onClick={this.checkPalindrome}></button>
                <span className='resultsBox'>{JSON.stringify(this.state.Palindrome)}</span>
            </div>
        )
    }
}

export default Palindrome;