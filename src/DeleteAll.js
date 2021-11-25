import React, {Component} from "react";
import TodoList from "./Todolist";

class Deleteall extends Component {

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

export default Deleteall;