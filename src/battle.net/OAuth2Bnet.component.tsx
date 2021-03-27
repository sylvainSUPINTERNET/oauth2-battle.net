import React, {useEffect, useState} from 'react';
import defaultValues from "../default/values";
import BattleNetIcon from '../battlenet.svg';
import {OAuth2CodeFlowConfiguration} from "../default/blizzardApi"


const OAuth2BnetComponent = ( { btnText, logoStyle, linkStyle, containerStyle, settings, callback, containerClassName, btnClassName, logoClassName } : IOAuth2BtnProps) => {
    const [bnetOAuth2Clinet, setBnetOAuth2Clinet] = useState<OAuth2CodeFlowConfiguration>();
    
    const {
        BTN_DEFAULT_TEXT
    } = defaultValues;
    
    const retrieveUserInfo = async (OAuth2BattleNetClient: OAuth2CodeFlowConfiguration, code: string | null) => {
        const headers = new Headers();
        headers.append("Content-Type", "application/x-www-form-urlencoded");
        headers.set('Authorization', 'Basic ' + btoa(OAuth2BattleNetClient.getClientId() + ":" + OAuth2BattleNetClient.getClientSecret()));

        const resp = await fetch(`${OAuth2BattleNetClient.getTokenUri()}`,
        {
            method: "POST",
            headers,
            body: `redirect_uri=${OAuth2BattleNetClient.getRedirectUri()}&scope=${OAuth2BattleNetClient.getScopes()}&grant_type=authorization_code&code=${code}`
        });

        if ( resp.status === 200) {
           callback(await resp.json())
        }
    }
    useEffect( () => {
        let urlParams = new URLSearchParams((window.location.search)).get("code");
        let OAuth2BattleNetClient = settings;
        setBnetOAuth2Clinet(OAuth2BattleNetClient)
        if ( urlParams !== null ) { 
            retrieveUserInfo(OAuth2BattleNetClient, urlParams);
        }
    }, [])

    return (
     <div>
        <div style={containerStyle} className={containerClassName}>
            <a className={btnClassName} style={linkStyle} href={bnetOAuth2Clinet?.getAuthorizeURL()}>
                <img src={BattleNetIcon} className={logoClassName} style={logoStyle} alt="battle.net logo" />
                {btnText && btnText !== "" ? btnText : BTN_DEFAULT_TEXT}
            </a>
        </div>
    </div>
    );
  }


  interface IOAuth2BtnProps {
    btnText: string;
    logoStyle?: any;
    linkStyle?: any;
    containerStyle?: any;
    settings: OAuth2CodeFlowConfiguration;
    callback: any;
    btnClassName?: any;
    linkClassName?: any;
    containerClassName?: any;
    logoClassName?: any;
}

  export default OAuth2BnetComponent;