import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCount } from "../reducers/companyReducer";
import './app.scss';

const App = () => {
  const dispatch = useDispatch();
  const count = useSelector(state => state.company.count)

  function onCountClick() {
    dispatch(setCount(7))
  };

  return (
    <div>
      <button onClick={() => onCountClick()}>Count</button>
      <div>{count}</div>
    </div>
  )
}

export default App;