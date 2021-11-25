import React, {Component} from 'react';
import './Todolist.css';
import TodoList from "./Todolist";

class Openlist extends Component {

    state= { render: false }
    add = () => {
        this.setState({render : !this.state.render})
    }
    render() {
        return (
            <div className="wrap">
                <div className="form">
                <button onClick={() => this.add()}>Открыть менеджер задач</button>
                { this.state.render && <TodoList/>}
                </div>
            </div>
        );
    }
}

export default Openlist;