import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

function TextInputGroup({
  label,
  name,
  value,
  placeholder,
  type,
  onChange,
  error
}) {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        name={name}
        className={classnames('form-control form-control-lg', {
          'is-invalid': error
        })}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      {error && <div className="invalid-feedback">{error}</div>}
    </div>
  );
}

TextInputGroup.defaultProps = {
  placeholder: '',
  type: 'text',
  onChange: () => {}
};

TextInputGroup.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  onChange: PropTypes.func,
  error: PropTypes.string
};

export default TextInputGroup;
