import React, {Component} from 'react';
import FlipMove from 'react-flip-move';
import moment from 'moment';

class TodoItems extends Component {
    constructor(props) {
        super(props);
        this.addItem = this.addItem.bind(this);
        this.delete = this.delete.bind(this);
    }

    function () {
        var items = this.state.items;
        var exceedLimit = 0;
        items.map((item) => {
            const dateLimit = moment(item.date, 'DDTHH-MM-YYYY');
            const now = moment()
                if (dateLimit.isValid() && now.isAfter(dateLimit)) {
                    exceedLimit++;
                }
        })
        if (exceedLimit === 1) {
            this.setState({class: 'list1'});
        }
        else{this.setState({class: 'list'});
        }
     };

    addItem(item) {

        return <li onClick={() => this.delete(item.key)} key={item.key}>{item.text}, Выполнить до {item.date}</li>;
    }

    delete(key) {
        this.props.delete(key);
    }

    render() {
        var items = this.props.items;
        var todoItems = items.map(this.addItem)
        return (
            <ul>
                <FlipMove duration={250} easing="ease-out">
                    {todoItems}
                </FlipMove>
            </ul>
        );
    }
}

export default TodoItems;