import React, {useEffect} from 'react';
import OAuth2BnetComponent from "./battle.net/OAuth2Bnet.component";

function App() {
  return (
   <OAuth2BnetComponent 
          btnText={"Connect with Battle.net"} 
          logoStyle={{"width": "3%", "height": "auto", "verticalAlign": "middle"}} 
         />
  );
}



export default App;
