import React, { Fragment, useContext } from 'react';
import Button from "./Button";
import LanguageContext from '../contexts/LanguageContext';

const LoginPage = () => {
    // const {data} = useContext(LanguageContext);

  return(
      <Fragment>
          <div>Log In</div>
          <Button/>
      </Fragment>
  )
};

export default LoginPage;