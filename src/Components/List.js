import React, { Component } from 'react';
import { Form, FormGroup, FormLabel, ControlLabel, Button } from 'react-bootstrap';


class List extends Component {

    constructor() {
        super()

        this.state = { bucketListItem: '' }
    };


    render() {
        return (
            <div>
              <div></div>
              <Form>
                  <FormGroup>
                      <ControlLabel>Bucket List Item</ControlLabel>
                      <FormLabel onChange={event => this.setState({ item: event.target.value })} className="item" />
                  </FormGroup>
              </Form>
            </div>
        )
    }
}


export default List;