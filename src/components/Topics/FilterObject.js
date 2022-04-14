import React, {Component} from 'react'

const trucks = [{"Make": "Dodge", "Model": "Ram", "Year": "2020", "MPG":"19"}, {"Make": "Ford", "Model": "F150", "Year": "2021", "BedLength":"6ft"}, {"Make": "Toyota", "Model": "Tacoma", "Year": "2018", "Doors":"4"}];


class FilterObject extends Component{
    constructor(props){
        super(props);
        this.state = {
            unFilteredArray: trucks,
            userInput: '',
            filteredArray: []
        }
        this.getInput = this.getInput.bind(this);
        this.filterObject = this.filterObject.bind(this);
    }
    getInput(event){
        this.setState({userInput:event.target.value});
    }
    filterObject(event){
        const input = this.state.userInput;
        const trucks = this.state.unFilteredArray;
        var filteredTrucks = [];
        trucks.forEach((element) =>{
            if(element.hasOwnProperty(input)){
                filteredTrucks.push(element);
            }
        })
        this.setState({filteredArray: filteredTrucks})
        console.log(this.state.filteredArray);
       
    }
    render(){
        return(
            <div className='puzzleBox filterObjectPB'>
                <h4>Filter Object</h4>
                <span className='puzzleText'>{JSON.stringify(trucks)}</span>
                <input className='inputLine' onChange={this.getInput}></input>
                <button className='confirmationButton' onClick={this.filterObject}></button>
                <span className='resultsBox filterObjectRB'>{JSON.stringify(this.state.filteredArray, null, 10)}</span>
            </div>
        )
    }
}

export default FilterObject;