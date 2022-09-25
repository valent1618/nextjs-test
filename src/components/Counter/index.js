import { useDispatch, useSelector } from 'react-redux';
import {
  increment,
  decrement,
  add,
  selectValue,
} from '../../redux/slices/counter';

export default function Counter() {
  const dispatch = useDispatch();
  const count = useSelector(selectValue);

  return (
    <div className='Counter'>
      <h2>{count}</h2>
      <div className='buttons-container'>
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
        <button onClick={() => dispatch(add(7))}>Add 7</button>
      </div>
    </div>
  );
}
