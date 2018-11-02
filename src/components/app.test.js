import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import renderer from 'react-test-renderer';


describe('App', () => {
    //helper function shallowly renders the react component ( only renders the parent )
    const app = shallow(<App />);

    it('renders correctly', () => {
        //enzyme method
        var wrapper = renderer.create(<App />).toJSON();
        //toMatchSnapshot -jest feature. keep a record history of react components ( can tell when a components render output changes)
        // this is done so that if changes are made they you can see if they have an effect on the rendered component
        expect(wrapper).toMatchSnapshot();
    });
    
    it('initialize the state with an emply list of gifts' , () => {
        //expect checks that parts of the react component equal a certain criteria
        //app.state() - this allows you get get the state of the react component
        // this is checking that when the component renders the initail state is an empty array
        expect(app.state().gifts).toEqual([]);
        //expect(app.state().gifts).toEqual([{ id:3 }]);
    });
    
    //Open a describe because all the following tests pretain to the same thing ( the button )
    describe('when clicking the `add gift` button', () => {

        const id = 1;
        // This sets up a method that is called at every `it` instance this code runs before the code in the `it`        
        beforeEach(() => {
            //app.find is used to get hold of inner child nodes/className from the react component using jsx tags
            //enzyme method to simulate a click
            app.find('.btn-add').simulate('click');
            //gift.find('.input-present').simulate('change', { target: { value: present}});

        });

        // This sets up a method that is called at every `it` instance this code runs after the code in the `it`        
        afterEach(() => {
            app.setState({ gifts:[] });
        });

        //example without the before each and after each 
        // it(`adds a new gift to 'state'`,  () => {
        //     app.find('.btn-add').simulate('click');
        //     expect(app.state().gifts).toEqual([{ id }]);
        //     app.setState({ gifts:[] });
        // });

        it(`adds a new gift to 'state'`,  () => {
            // this will check the state after the button is clicked 
            expect(app.state().gifts).toEqual([{ id }]);
        });

        it('creates a gift component', () => {
            //checking that the Gift react component renders
            expect(app.find('Gift').exists()).toBe(true);
        });

        describe('and the user wants to remove the added gift', () => {
            beforeEach(() => {
                //this selects the remove gift button
                app.instance().removeGift(id);
            });

            it('removes gift from state',() => {
                // this checks to see after the button is clicked is the gift removed
                expect(app.state().gifts).toEqual([]);
            });
        });
    
    }) 
})

