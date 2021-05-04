import { Route, Redirect } from "react-router-dom";

export const PublicRoute = (props) => {
    return (<Route {...props} />);
};

export const ProtectedRoute = ({ component: ComponentToRender, ...props }) => {
    return localStorage.getItem('session')
        ? (<ComponentToRender {...props} />)
        : (<Redirect to="/signin" />);
};