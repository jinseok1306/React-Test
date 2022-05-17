import React from 'react';
import { connect } from 'react-redux';

const OtherCart = (props : any) => {
    return (
        <div className='items'>
            <h3>다른 장바구니</h3>
            <h4>물품 수:{props.Count}</h4>
        </div>
    )
}

const mapStateToProps = (state : any) => {
    return {
        Count: state.cart.Count
    }
}

export default connect(mapStateToProps)(OtherCart);