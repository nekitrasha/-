import React, {Component} from 'react';
import './Todolist.css';
import TodoItems from './Todoitem';




class TodoList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            items: []
        }


        this.addItem = this.addItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
        /*this.ProvDate = this.ProvDate.bind(this);*/

    }


    addItem(e) {
        var date1 = new Date().getDate() + 7; 
        var month = new Date().getMonth() ; 
        var year = new Date().getFullYear(); 
        const currentDate = date1 +' / ' + month + ' / ' + year;
        var items = this.state.items;
        if (this._input.value !== '') {
            items.unshift({
                key: Date.now(),
                text: this._input.value,
                date: currentDate
            });
            this.setState({
                items: items
            });
            this._input.value = '';
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

   /* ProvDate(key) {
        var items = this.state.items;
        var exceedLimit = 0;
        var filteredItems = items.filter(
            function (item) {

                    items.map((item) => {
                        const dateLimit = moment(item.date, 'DDTHH-MM-YYYY');
                        const now = moment()
                        if (dateLimit.isValid() && now.isAfter(dateLimit)) {
                            exceedLimit++;
                        }
                    }
                )

            });
            if (exceedLimit === 1) {
                this.setState({
                    class: 'list1'
                });
        }
    }*/


    /*removeClass(e){
        e.target.classList.remove('list');
        <button className="submit" onClick={() => {this.removeClass()}}>очистить</button>
    }*/


    render() {

        return (
            <div className="wrap">
                <div className="form">
                    <div className="list">
                        <ul>
                        <li>Проверить почту!</li>
                        <li>Проверить список задач!</li>
                        <TodoItems items={this.state.items} delete={this.deleteItem} />
                        </ul>
                    </div>
                    <form onSubmit={this.addItem}>
                        <input ref={(a) => this._input = a}  placeholder="Новая задача" />
                        <button type="submit">Добавить</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default TodoList;