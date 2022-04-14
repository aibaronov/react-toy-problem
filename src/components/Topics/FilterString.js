import React, {Component} from 'react'

const stringVals =  [ "James", "Jessica", "Melody", "Tyler", "Blake", "Jennifer", "Mark", "Maddy" ];

class FilterString extends Component{
    constructor(props){
        super(props);
        this.state = {
            unFilteredArray: stringVals,
            userInput: '',
            filteredArray: []
        }
        this.getInput = this.getInput.bind(this);
        this.filterInput = this.filterInput.bind(this);
    }
    getInput(event){
        this.setState({userInput:event.target.value});
        console.log(this.state.userInput)
    }
    filterInput(event){
        let input = this.state.userInput;
        var results = [];
        stringVals.forEach((string) => {
            if(string.includes(input)){
                results.push(string);
            }
        })
        this.setState({filteredArray: results});
        console.log(results);
        // console.log(this.state.filteredArray);
        
    }
    render(){
        return(
            <div className='puzzleBox filterStringPB'>
                <h4>Filter String</h4>
                <span className='puzzleText'>{JSON.stringify(stringVals)}</span>
                <input className='inputLine' onChange={this.getInput}></input>
                <button className='confirmationButton' onClick={this.filterInput}></button>
                <span className='resultsBox filterStringRB'>{JSON.stringify(this.state.filteredArray, null)}</span>
            </div>
        )
    }
}

export default FilterString;