import { gapi } from "gapi-script";
import { useEffect } from "react";
import { key } from "../../../service/Key";
import GoogleSignIn from "../../component/auth/GoogleSignIn";

const Login = () => {
  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: key.GOOGLE_CLIENT_ID,
        scope: "profile",
      });
    }
    gapi.load("client:auth2", start);
  }, []);

  // const accessToken = gapi.auth.getToken().access_token

  return <GoogleSignIn />;
};

export default Login;
