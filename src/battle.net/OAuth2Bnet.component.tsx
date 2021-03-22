import React, {useEffect} from 'react';
import defaultValues from "../default/values";

import {OAuth2CodeFlowConfiguration} from "../default/blizzardApi"

const OAuth2BnetComponent = ( { btnText } : IOAuth2BtnProps) => {

    const {
        BTN_DEFAULT_TEXT
    } = defaultValues;

    useEffect( () => {
        let oauth2Conf = new OAuth2CodeFlowConfiguration("eu", ["wow.profile", "sc2.profile"]);
        console.log(oauth2Conf.regionName);
        console.log(oauth2Conf.getScopes());
        console.log(oauth2Conf.getAuthorizationUri());
        console.log(oauth2Conf.getTokenUri());
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