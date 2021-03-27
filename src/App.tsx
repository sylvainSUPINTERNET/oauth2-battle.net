import React from 'react';
import OAuth2BnetComponent from "./battle.net/OAuth2Bnet.component";
import { OAuth2CodeFlowConfiguration } from './default/blizzardApi';
import 'bootstrap/dist/css/bootstrap.min.css';


/**
 * Basic example how to use this component, simple replace client / secret / redirectUri and implement your business logic with your access token
 */

function App() {

  const getAccessToken = async(accessTokenResponse: any) => {
    /*
      Business logic here ! 
      accessTokenResponse => contains all data about your API access token to call Blizzard API
      E.g keep this token in localStorage / sessionStorage and refresh the page to avoid the oauth2 response code in your URL !
    */

  // Example : Request Blizzard API for item
  // https://develop.battle.net/documentation/world-of-warcraft-classic/guides/media-documents
    /*
         const { access_token } = accessTokenResponse;
          const itemDetail = await fetch("https://eu.api.blizzard.com/data/wow/item/19019?namespace=static-eu", {
               method: 'GET',
               headers: {
                   'Content-Type': 'application/json',
                   'Authorization': `Bearer ${access_token}`
               }
           })
           console.log(await itemDetail.json());
    */
  }
  return (
   <OAuth2BnetComponent 
          btnText={"Connect with Battle.net"} 
          logoStyle={{"width": "15%", "verticalAlign": "middle", "marginRight": "5px"}}
          settings={new OAuth2CodeFlowConfiguration({
            "regionName" : "eu",
            "scopes" : ["wow.profile"],
            "clientId" : "<clientId>",
            "response_type": "code",
            "redirect_uri": "<redirectUri>",
            "clientSecret": "<clientSecret>",
        })}
        callback={getAccessToken}
        btnClassName={"btn btn-primary p-1 rounded shadow"}
        containerClassName={"m-3"}/>
  );
}



export default App;
