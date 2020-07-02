import React, { Component } from 'react';
import { Form, FormGroup, FormLabel, FormControl, Button } from 'react-bootstrap';


class Item extends Component {

    constructor() {
        super()

        this.state = { item: '' }
    };


    render() {
        return (
            <div>
              <div></div>
              <Form>
                  <FormGroup>
                      <FormLabel>Bucket List Item</FormLabel>
                      <FormControl onChange={event => this.setState({ item: event.target.value })} className="item" />
                  </FormGroup>
              </Form>
            </div>
        )
    }
}


export default Item;