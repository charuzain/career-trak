/* eslint-disable react/prop-types */
import './FormRow.scss';

const FormRow = (props) => {
  console.log(props);
  return (
    <div className='form-row'>
      <label htmlFor={props.name} className='form-row__label'>{props.labelText}</label>
      <input type={props.type} name={props.name} id={props.name} required className='form-row__input' />
    </div>
  );
};

export default FormRow;
