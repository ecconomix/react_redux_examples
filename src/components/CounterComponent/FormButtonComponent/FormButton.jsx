import React from 'react';

const FormButton = ({
  title,
  handleClick
}) => (
  <form>
    <div className="field is-grouped">
      <div className="control">
        <button className="button is-primary" 
            onClick={e => {
              e.preventDefault();
              handleClick()
            }}>
            {title}
        </button>
      </div>
    </div>
  </form>
);

export default FormButton;