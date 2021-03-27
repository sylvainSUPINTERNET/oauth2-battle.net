import React, {useEffect, useState} from 'react';
import defaultValues from "../default/values";
import BattleNetIcon from '../battlenet.svg';
import {OAuth2CodeFlowConfiguration} from "../default/blizzardApi"


const OAuth2BnetComponent = ( { btnText, logoStyle, linkStyle, containerStyle } : IOAuth2BtnProps) => {

    const [bnetOAuth2Clinet, setBnetOAuth2Clinet] = useState<OAuth2CodeFlowConfiguration>();
    const [code, setCode] = useState<string | null>(null);
    
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
           const {access_token} = await resp.json();

           // Example
           // https://develop.battle.net/documentation/world-of-warcraft-classic/guides/media-documents
          const respBoss = await fetch("https://eu.api.blizzard.com/data/wow/item/19019?namespace=static-eu", {
               method: 'GET',
               headers: {
                   'Content-Type': 'application/json',
                   'Authorization': `Bearer ${access_token}`
               }
           })
           console.log(await respBoss.json());
        }

        
        /*
        const jsonData = await resp.json();
        console.log(jsonData)*/
    }

    // Example for boss data
    // https://us.forums.blizzard.com/en/blizzard/t/oauth-2-community-implementation-examples/84/2

    useEffect( () => {
        let urlParams = new URLSearchParams((window.location.search)).get("code");

        // https://eu.api.battle.net/account/user?access_token=
        let OAuth2BattleNetClient = new OAuth2CodeFlowConfiguration({
            "regionName" : "eu",
            "scopes" : ["wow.profile"],
            "clientId" : "",
            "response_type": "code",
            "redirect_uri": "http://localhost:3000/oauth/redirect",
            "clientSecret": "",
        });
        setBnetOAuth2Clinet(OAuth2BattleNetClient)

        if ( urlParams !== null ) { 
            retrieveUserInfo(OAuth2BattleNetClient, urlParams);
        }


    }, [])

    return (
     <div>

        <div style={containerStyle}>
            <a href={bnetOAuth2Clinet?.getAuthorizeURL()} style={linkStyle}>
                <img src={BattleNetIcon} style={logoStyle} alt="battle.net logo" />
                
                {btnText && btnText !== "" ? btnText : BTN_DEFAULT_TEXT}

            </a>

            <p>{code}</p>
        </div>

    </div>
    );
  }


  interface IOAuth2BtnProps {
    btnText: string;
    logoStyle?: any;
    linkStyle?: any;
    containerStyle?: any;
}

  export default OAuth2BnetComponent;