import React from 'react';
import SelectInput from '../reusable/SelectInput'
import RadioBtn from '../reusable/RadioBtn'
import InputText from '../reusable/InputText'

const MyOrder = (props) => {
  return (
      <div>
        <div className="col-md-6">
          <SelectInput />
        </div>

        <div className="col-md-6">
          <RadioBtn />
        </div>

        <div className="counter">
          <button className="btn btn-dark" onClick={props.Plus}>+</button>
          <InputText value={props.value} />
          <button className="btn btn-dark" onClick={props.Minus}>-</button>
        </div>

        <div className="total-harga">
          <h4><b>Total Harga : Rp.2000.000-</b></h4>
        </div>
      </div>
  )
}

export default MyOrder;

// state = {
//   order:0
// }

// HandleCounter = (value) => {
// 	this.props.onCounterChange(value);
// }

// Minus = () => {
//   if (this.state.order>0) {
//     this.setState({
//       order: this.state.order - 1
//     }, () => {
//     	this.HandleCounter(this.state.order);
//     })
//   }
// }

// Plus = () =>{
//     this.setState({
//       order: this.state.order + 1
//     }, () => {
//     	this.HandleCounter(this.state.order);
//     })
//   }