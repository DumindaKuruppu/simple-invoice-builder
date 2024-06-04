import {ErrorResponse, useRouteError} from "react-router-dom";

export const ErrorPage = () => {
    const error = useRouteError() as ErrorResponse;

    return (
        <div id="error-page">
            <h1>Oops!</h1>
            <p style={{background: "red"}}>Sorry, an unexpected error has occurred.</p>
            <p>
                <i>{`${error.status} : ${error.statusText}`}</i>
            </p>
        </div>
    );
};