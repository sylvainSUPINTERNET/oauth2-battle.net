import React, {useEffect} from 'react';
import * as defaultValues from "../default/values";

const OAuth2BnetComponent = props => {
    const {
        BTN_DEFAULT_TEXT
    } = defaultValues.default;

    return (
     <div>
         <button>{defaultValues.default.BTN_DEFAULT_TEXT}</button>
     </div>
    );
  }
  
  export default OAuth2BnetComponent;