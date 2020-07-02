import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import Item from './Item';

class App extends Component {

  constructor() {
    super();

    this.state = { items: [] };
  }

  addItem = () => {
    const { items } = this.state;

    const ids = this.state.items.map(item => item.id);

    const max_id = ids.length > 0 ? Math.max(...ids) : 0;

    items.push({ id: max_id+1 })

    this.setState({ items });
  }


  removeItem = () => {

    const items = this.state.items.filter(item => item.id !== item.id);

    this.setState({ items });

  }

  render() {

    return (
      <div className="App">
        <div className="rendered-list">
          {
            this.state.items.map(item => {
              return (
                <div>
                  Item added to your bucket list!
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
