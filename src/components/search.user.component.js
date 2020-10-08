import React, { Component } from 'react';

export default class SearchUserComponent extends React.Component {

  constructor(props){
    super(props)
    
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      value: ''
    }
  } 

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    this.props.onSelectUser(this.state.value)
    event.preventDefault();
  }

  render() {
    return (
      <div className="form-container">
        <form onSubmit={this.handleSubmit}>
          <label>
            <input className="css-input" placeholder="Digite um usuário" type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input className="pesquisar" type="submit" value="Pesquisar Repositórios" />
        </form>
      </div>
    );
  }
}