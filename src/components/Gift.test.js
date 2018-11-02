import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import Gift from './Gift';

describe('Gift', () => {
    // jest.fn() creates a mock function
    const mockRemove = jest.fn();
    const id = 1; 
    const props = { gift: { id }, removeGift:mockRemove };
    const gift = shallow(<Gift {...props}/>);
    // same as const gift = shallow(<Gift gift={props.gift} removeGift={props.removeGift}/>);

    // it('renders properly', () => {
    //      //expect checks that parts of the react component equal a certain criteria
    //     //toMatchSnapshot -jest feature. keep a record history of react components ( can tell when a components render output changes)
    //     // this is done so that if changes are made they you can see if they have an effect on the rendered component
    //     var wrapper = renderer.create(<Gift {...props}/>).toJSON();
    //     expect(wrapper).toMatchSnapshot();
    // });

    it('init a person and present in `state`', () => {
        //app.state() - this allows you get get the state of the react component
        // this is checking that when the component renders the initail state is object with person='' and present = ''
        expect(gift.state()).toEqual({ person: '', present: ''});
    });

    describe('when typing into the person input', () => {

        const person = 'uncle';

        beforeEach(() => {
            //find input person node 
            //simulate is used to simulte user input and the `change`phrase is used to describe the case of the user inputing and value and observing the change 
            //the value input for this example is `uncle`
            gift.find('.input-person').simulate('change', { target: { value: person}});
        });

        it('updates the person in `state`', () => {
            // This checks that the simulated typing equals the value given
            expect(gift.state().person).toEqual(person);
        })
    });

    describe('when typing into the present input', () => {
        const present = 'Golf Clubs';

        beforeEach(() => {
            //find input person node 
            //simulate is used to simulte user input and the `change`phrase is used to describe the case of the user inputing and value and observing the change 
            //the value input for this example is `Golf Clubs`
            gift.find('.input-present').simulate('change', { target: { value: present}});

            it('updates the present now in `state`', () => {
                // This checks that the simulated typing equals the value given
                expect(gift.state().present).toEqual(present);
            });
        })
    });

    describe('when clicking the `Remove Gift` button', () => {
        beforeEach(() => {
            gift.find('.btn-remove').simulate('click');
        });

        it('calls the removeGift callback', () => {

            expect(mockRemove).toHaveBeenCalledWith(id);
        });
    })
})