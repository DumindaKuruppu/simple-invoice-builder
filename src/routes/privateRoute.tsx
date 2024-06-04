import {Outlet} from "react-router-dom";

const PrivateRoute = () => {
    const isAuthorized = true;

    return isAuthorized ? <Outlet/> : <h1>Not Authorized !</h1>
};

export default PrivateRoute;