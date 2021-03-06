import React from 'react';
import ButtonsGroup from '../button/Buttonsgroup';


const SignUpIndustry = ({ clickHandler, options }) => (
  <div>
    <h1>Select Your Industry</h1>
    <ButtonsGroup classN="fluid ui button massive" clickHandler={clickHandler} options={options} />
  </div>
);

export default SignUpIndustry;
