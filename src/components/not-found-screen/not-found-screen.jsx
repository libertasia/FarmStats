import React from 'react';
import {Link} from 'react-router-dom';
import {AppRoute} from '../../const';

const NotFoundScreen = () => {
    return (
        <div className="container">
            <h1>404 Page Not Found</h1>
            <Link to={AppRoute.ROOT}>We couldn't find the content. Please return to Main Page</Link>
        </div>
    );
};

export default NotFoundScreen;
