import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import Gift from './Gift';
import { max_number } from '../helper';

class App extends Component {

    constructor(){
        super();

        this.state = { 
            gifts: [],
            width: 0, 
            height: 0,

        };
    }

    addGift = () => {

        const { gifts } = this.state;

        const ids = this.state.gifts.map((gift) => {
           return gift.id
        });

        gifts.push({ id: max_number(ids)+1 });

        this.setState({gifts});

    }

    removeGift = id => {
        const gifts = this.state.gifts.filter(gift => gift.id !== id);

        this.setState({ gifts });
    }

    render(){
        return(
            <div>
                 <nav>
                    <div className ="nav-wrapper cyan darken-3 z-depth-1">
                        <a href='#!' style={{paddingLeft:20}} className="brand-logo">Gift Giver</a>
                    </div>
                </nav>

                <div style={{justifyContent:'center', paddingLeft:'25%', paddingRight:'25%' }}>
                <h2 style={{display: 'flex', justifyContent: 'center'}}>Gift Giver</h2>
                <div className='gift-list' style={{paddingBottom:20}}>
                    {
                    this.state.gifts.map(gift => {
                            return (
                                <Gift 
                                    key={gift.id}
                                    gift={gift}
                                    removeGift={this.removeGift}
                                    >
                                </Gift>
                            )
                        })
                    }
                    </div>
                    <div class='section' style={{display: 'flex', justifyContent: 'center', paddingTop:30}}>
                        <Button  className='btn-add' onClick={this.addGift}>Add Gift</Button>
                    </div>
                    
                </div>
            </div>
        )
    }
}

export default App; 