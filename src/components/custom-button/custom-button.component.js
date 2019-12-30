import React from 'react';

import './custom-button.styles.scss';

const CustomButton = ({
  children,
  isGoogleSignIn,
  inverted,
  ...otherProps
}) => (
  <button
    className={`${inverted ? 'google-sign-in' : ''} cutom-button`}
    {...otherProps}
  >
    {children}
  </button>
);

export default CustomButton;
