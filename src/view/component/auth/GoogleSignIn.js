import { GoogleLogin } from "react-google-login";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setUser } from "../../../redux/Authentication";
import { key } from "../../../service/Key";

function GoogleSignIn() {
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const onSuccess = (response) => {
    const payload = Object.freeze({
      firstName: response.profileObj?.givenName,
      lastName: response.profileObj?.familyName,
      idToken: response.tokenId,
      accessToken: response.accessToken,
      pictureUrl: response.profileObj?.imageUrl,
      email: response.profileObj?.email,
    })
    dispatch(
      setUser(payload)
    );
    navigate("/");
  };

  const onFailure = (response) => {
    if(response.error) alert("Something went wrong. Kindly try again!.")
  };

  return (
    <GoogleLogin
      clientId={key.GOOGLE_CLIENT_ID}
      buttonText="Login"
      onSuccess={onSuccess}
      onFailure={onFailure}
      cookiePolicy={"single_host_origin"}
    />
  );
}

export default GoogleSignIn;
