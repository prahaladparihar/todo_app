import React, { Component } from 'react'

class AddTodo extends Component {
    state = {
        task: ''
    }
    handleChange = (e) => {
        this.setState({
            task: e.target.value
        });
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state);
        this.setState({
            task: ''
        });
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div className='input-field'>
                        <input id='id' type='text' onChange={this.handleChange} value={this.state.task} />
                        <label htmlFor='task'>Add new todo here</label>
                    </div>
                </form>
            </div>
        );
    }
}

export default AddTodo;