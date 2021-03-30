import React from "react";
import { connect } from "react-redux";
import { INCREMENT, DECREMENT } from "./redux/action/Action";

const Counter = ({ INCREMENT, DECREMENT, counter }) => {
  return (
    <div>
      <button onClick={() => INCREMENT()}>+</button>
      <span>{counter}</span>
      <button onClick={() => DECREMENT()}>-</button>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    counter: state.counter,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    INCREMENT: () => dispatch(INCREMENT()),
    DECREMENT: () => dispatch(DECREMENT()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
// ******************************

// import React from "react";
// import { connect, useSelector, useDispatch } from "react-redux";
// import { addOne, MinusOne } from "./redux/action/ActionType";

// const Counter = () => {
//   const counter = useSelector((state) => state.counter);
//   const dispatch = useDispatch();
//   return (
//     <div>
//       <button onClick={() => dispatch({ type: addOne })}>+</button>
//       <span>{counter}</span>
//       <button onClick={() => dispatch({ type: MinusOne })}>-</button>
//     </div>
//   );
// };
