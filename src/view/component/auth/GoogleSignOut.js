import { GoogleLogout } from "react-google-login";
import { useDispatch } from "react-redux";
import { logout } from "../../../redux/Authentication";

import { key } from "../../../service/Key";

function GoogleSignOut() {
  const dispatch = useDispatch();

  const onSuccess = () => {
    dispatch(logout());
  };

  return (
    <GoogleLogout
      clientId={key.GOOGLE_CLIENT_ID}
      buttonText="Logout"
      onLogoutSuccess={onSuccess}
    />
  );
}

export default GoogleSignOut;
