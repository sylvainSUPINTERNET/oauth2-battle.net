import React, {useEffect} from 'react';
import defaultValues from "../default/values";

import {AllCountriesConfiguration} from "../default/blizzardApi"

const OAuth2BnetComponent = ( { btnText } : IOAuth2BtnProps) => {

    const {
        BTN_DEFAULT_TEXT
    } = defaultValues;

    useEffect( () => {
        let t = new AllCountriesConfiguration("eu");
        console.log(t.name);
        console.log(t.getAuthorization());
    }, [])

    return (
     <div>
         {/*
<a className="btn btn-block btn-social btn-google mt-2" href="https://accounts.google.com/o/oauth2/v2/auth?scope=email%20profile&access_type=offline&redirect_uri=http://localhost:5999/connect/google&response_type=code&client_id=105171889289-nufvlvi9cit9pmqqk9ofemfhb8lpvgkj.apps.googleusercontent.com">
         */}
         <a href="">{btnText && btnText !== "" ? btnText : BTN_DEFAULT_TEXT}</a>
     </div>
    );
  }


  interface IOAuth2BtnProps {
    btnText: string;
}

  export default OAuth2BnetComponent;