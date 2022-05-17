import React from 'react';
import { connect } from 'react-redux';
import { addItem, removeItem } from '../redux/cart/actions';

const Cart = (props : any) => { //props로 state와 action을 받는다.
    return (
        <div className='items'>
            <h3>장바구니</h3>
            <h4>물품 수:{props.Count}</h4>
            <button onClick={() => props.addItem()}>물건 추가하기</button>
            <button onClick={() => props.removeItem()}>물건 빼기</button>
        </div>
    )
}

const mapStateToProps = (state : any) => {
    console.log(state, 'state');
    return {
        Count: state.cart.Count //reducer가 여러개인 경우 state.Reducer 로 호출해야 된다.
    }
}

const mapDispatchToProps = { //Action을 여러개 사용하고 싶을 경우에는 아래와 같이 선언한다.
    addItem,
    removeItem
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart); //connect로 Cart 컴포넌트에 state와 action을 추가한다.