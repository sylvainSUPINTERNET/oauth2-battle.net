import React, {useEffect, useState} from 'react';
import defaultValues from "../default/values";
import BattleNetIcon from '../battlenet.svg';

import {OAuth2CodeFlowConfiguration} from "../default/blizzardApi"

const OAuth2BnetComponent = ( { btnText } : IOAuth2BtnProps) => {

    const [bnetOAuth2Clinet, setBnetOAuth2Clinet] = useState<OAuth2CodeFlowConfiguration>();

    const {
        BTN_DEFAULT_TEXT
    } = defaultValues;

    useEffect( () => {
        let OAuth2BattleNetClient = new OAuth2CodeFlowConfiguration({
            "regionName" : "eu",
            "scopes" : ["wow.profile"],
            "clientId" : "7e31212a46084c42890d36362651cd94",
            "response_type": "code",
            "redirect_uri": "http://localhost:3000/oauth/redirect"
        });
        setBnetOAuth2Clinet(OAuth2BattleNetClient)
    }, [])

    return (
     <div>

        <div>
            <a href={bnetOAuth2Clinet?.getAuthorizeURL()}>
                <img src={BattleNetIcon} style={{"width": "3%", "height": "auto", "verticalAlign": "middle"}} alt="battle.net logo" />
                    {btnText && btnText !== "" ? btnText : BTN_DEFAULT_TEXT}
            </a>
        </div>

    </div>
    );
  }


  interface IOAuth2BtnProps {
    btnText: string;
}

  export default OAuth2BnetComponent;