import React from 'react';
import AddOption from './AddOption';
import Options from './Options';
import Action from './Action';
import Header from './Header';
import OptionModal from './optionModal';

export default class IndecisionApp extends React.Component {
  state = {
      options: [],
      selectedOption: undefined
  };
  
  handleDeleteOptions = () => {
    this.setState(() => ({ options: [] }));
  };

  handleDeleteOption = (optionToDelete) => {
   this.setState((preState) => ({
     options: preState.options.filter((option) => optionToDelete !== option)
   }));
  };

  handlePick = () => {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNum];
    this.setState(() =>({
      selectedOption: option
    }));
  };

  handleAddOption = (option) => {
    if(!option) {
      return 'Enter Valid value!';
    }
    else if(this.state.options.indexOf(option) > -1) {
      return 'This option already exist';
  }

    this.setState((preState) => ({ options: preState.options.concat(option) }));
  };
	
	handleClearSelectedOption = () => {
		this.setState(() => ({
			selectedOption: undefined
		}));
	};

  componentDidMount() {
    try {
        const json = localStorage.getItem('options');
        const options = JSON.parse(json);
        
        if (options) { 
          this.setState(() => ({ options }));
        } 
    } catch (e) {}
	}

  componentDidUpdate(prevProps, prevState) {
    if (prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options);
      localStorage.setItem('options', json);
    }
	} 

  render() {
    const subtitle = 'Put your life in the hands of a Computer';
    return (
      <div>
        <Header subtitle={subtitle} />
        <Action 
          hasptions={this.state.options.length > 0}
          handlePick={this.handlePick}
        />
        <Options 
          options={this.state.options} 
          handleDeleteOptions={this.handleDeleteOptions}
          handleDeleteOption ={this.handleDeleteOption}
        />
        <AddOption 
          handleAddOption={this.handleAddOption}
        />
        <OptionModal 
					selectedOption={this.state.selectedOption}
					handleClearSelectedOption={this.handleClearSelectedOption}
        />
      </div>
    );
  }
}