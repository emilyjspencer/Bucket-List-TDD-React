import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import Item from './Item';
import { max_number } from '../helpers';

class App extends Component {

  constructor() {
    super();

    this.state = { items: [] };
  }

  addItem = () => {
    const { items } = this.state;

    const ids = this.state.items.map(item => item.id);

    const max_id = max_number(ids);

    items.push({ id: max_id+1 })

    this.setState({ items });
  }


  removeItem = (id) => {

    const items = this.state.items.filter(item => item.id !== id);

    this.setState({ items });

  }

  render() {

    return (
      <div className="App">
        <h1>My Bucket List</h1>
        <div className="rendered-list">
          {
            this.state.items.map(item => {
              return (
                <div>
                  <Item key={item.id}
                  item={item}
                  removeItem={this.removeItem} />
                </div>
              )
            })
          }
        </div>
      <Button 
        onClick={this.addItem} 
        className="add-item"
        >Add Item</Button>
      </div>
  );
  };
}

export default App;
