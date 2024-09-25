import React from 'react';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../state/index';

const Shop = () => {

    const dispatch = useDispatch();
    const {depositMoney, withdrawMoney} = bindActionCreators(actionCreators, dispatch);

  return (
    <div>
        <h2>Buy this shoes at ₹50</h2>
        <button className="btn btn-primary mx-2" onClick={()=>dispatch(withdrawMoney(100))}>-</button>
        Add to Cart
        <button className="btn btn-primary mx-2" onClick={()=>dispatch(depositMoney(100))}>+</button>
    </div>
  )
}

export default Shop
