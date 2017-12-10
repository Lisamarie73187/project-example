import React, { Component } from 'react';
// import logo from './logo.svg';
import '../App.css';
// import Todo from './Todo';

import axios from 'axios';

class ToDoList extends Component {
  constructor() {
    super();

    this.state = {
      list: [],
      input: '',
      task: []
    };

    this.handleAddTask = this.handleAddTask.bind( this );
  }

  handleInputChange( value ) {
    this.setState({ input: value });
  }

  handleAddTask() {
      let newTask = {
        task: [...this.state.input]
      }
      axios.post(`http://localhost:3000/api/app/todo`, newTask).then( resp => {
        console.log(resp.data)
        this.setState({
          task:[...resp.data],
          input: '' 
        })
      }).catch(console.log)

      // this.setState({
      //   list: [...this.state.list, this.state.input ], 
      //   input: '' 
    //   })
    };

  

  render() {
    var listedArray = this.state.task.map((element,index)=>{
      return <li key={index}>{element}</li>
    })

    return (
      <div className="App">
        <h1>My to-do list:</h1>

         <div>
           <input value={this.state.input} 
                  placeholder="Enter new task" 
                 onChange={ (e) => this.handleInputChange( e.target.value ) }
           />

           <button onClick={ this.handleAddTask }>Add</button>
       {listedArray}
          </div>
        </div>

     
    );
  }
}

export default ToDoList;