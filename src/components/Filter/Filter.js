import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { phonebookSelectors, changeFilter } from '../../redux';
import s from '../styles/Input.module.css';

function Filter() {
  const value = useSelector(phonebookSelectors.getFilter);
  const dispatch = useDispatch();
  const onChange = event => dispatch(changeFilter(event.currentTarget.value));
  return (
    <label className={s.Label}>
      Find contacts by name
      <input
        type="text"
        value={value}
        onChange={onChange}
        className={s.Input}
      />
    </label>
  );
}

export default Filter;

// Filter.propTypes = {
//   value: PropTypes.string.isRequired,
//   onChange: PropTypes.func.isRequired,
// };
