import React, {Component, useState} from 'react';

import './Todolist.css';
import TodoItems from './Todoitem';
import moment from 'moment';


class TodoList extends Component {


    constructor(props) {
        super(props);


        this.state = {
            items: []
        }


        this.addItem = this.addItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);

        this.removeClass = this.removeClass.bind(this);

    }




    addItem(e) {
        var date1 = new Date();
        date1 = moment (date1).add(7,'days').format('DD - MM - YYYY')
        var items = this.state.items;
        if (this._input.value !== '') {
            if (this._input.value.length <= 240) {
                items.unshift({
                    key: Date.now(),
                    text: this._input.value,
                    date: date1
                });
                this.setState({
                    items: items
                });
                this._input.value = '';
            }
        }
        e.preventDefault();
    }

    deleteItem(key) {
        var items = this.state.items;
        var filteredItems = items.filter(
            function(item) {
                return item.key !== key;
            }
        );
        this.setState({
            items: filteredItems
        });
    }


    removeClass(){
        this.setState({
            items: []
        });
    }



    render() {

        return (
            <div className="wrap">
                <div className="form">
                    <div className="list">
                        <ul>
                            
                            <TodoItems items={this.state.items} delete={this.deleteItem} />
                        </ul>

                    </div>
                    <form onSubmit={this.addItem}>
                        <button className="submit" onClick={() => {this.removeClass()}}>Очистить</button>
                        <input ref={(a) => this._input = a}  placeholder="Новая задача (не более 240 символов)" />
                        <button type="submit">Добавить</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default TodoList;

