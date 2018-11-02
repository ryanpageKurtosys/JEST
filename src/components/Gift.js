import React, { Component } from 'react';
import { Form, FormGroup, FormControl, ControlLabel, Button} from 'react-bootstrap'

class Gift extends Component {
    constructor(props){
        super(props);
        
        this.state = { person: '', present: ''};
    }
    render(){
        return (
            <div>
                <Form>
                    <FormGroup>
                        <ControlLabel>Person</ControlLabel>
                        <FormControl 
                            className='input-person' 
                            onChange={event => this.setState({ person: event.target.value})}
                            />
                    </FormGroup>
                    <FormGroup style={{paddingBottom:20}}>
                        <ControlLabel>Present</ControlLabel>
                        <FormControl 
                            className='input-present' 
                            onChange={event => this.setState({ present: event.target.value})}
                            />
                    </FormGroup>
                    <div style={{display: 'flex', justifyContent: 'center'}}>
                        <Button 
                            className='btn-remove'
                            onClick={()=> this.props.removeGift(this.props.gift.id)}
                            >
                            Remove Gift
                            </Button>
                    </div>
                </Form>
            </div>
        )
    }
}

export default Gift;