import React from 'react';
import Menu from '../components/Menu';
import Cart from '../components/cart';
import OtherCart from '../components/otherCart';
import InputCart from '../components/inputCart';

const ReduxTest = () => {
    return (
        <div>            
            <Menu />
            <div>&nbsp;</div>
            <div className='App'>
                <Cart />
                <OtherCart />
                <InputCart />
            </div>            
        </div>
    );
};

export default ReduxTest;