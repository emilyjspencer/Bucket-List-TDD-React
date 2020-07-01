import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

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

  render() {

    return (
      <div className="App">
      <Button 
        onClick={this.addItem} 
        className="add-item"
        >Add Item</Button>
      </div>
  );
  };
}

export default App;
