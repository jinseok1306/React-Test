import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addInputItem } from '../redux/inputCart/actions';

const InputCart = (props : any) => {
    const [number, setNumber] = useState(1) //number값을 onClick 이벤트에 바로 적용하기 위해 useState 사용
    return (
        <div className='items'>
            <h3>입력 장바구니</h3>
            <h4>물품 수:{props.Count}</h4>
            <input type="text" value={number} onChange={(e) => setNumber(Number(e.target.value))}></input>
            <button onClick={() => props.addInputItem(number)}>물건 추가하기</button>
        </div>
    )
}

const mapStateToProps = (state : any) => {
    return {
        Count: state.cartInput.Count
    }
}

const mapDispatchToProps = {
    addInputItem: (number : number) => addInputItem(number) //action 호출 시 number 값 전달
}

export default connect(mapStateToProps, mapDispatchToProps)(InputCart);