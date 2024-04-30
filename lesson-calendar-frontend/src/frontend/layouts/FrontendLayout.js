import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Navbar from '../../layouts/frontend/Navbar';
import '../../assets/frontend/css/styles.css';

import Dashboard from '../../layouts/frontend/Dashboard';

import Publicroutes from '../../routes/Publicroutes';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';

const FrontendLayout = () => {

return (
<div>

<Navbar />

<div>
<Switch>
<Route path="/dashboard" component = {Dashboard} />

{Publicroutes.map((routedata, idx) => {
return (
routedata.component && (
<Route
key={idx}
path={routedata.path}
exact={routedata.exact}
name={routedata.name}
render={(props) => (
<routedata.component {...props} />
)}
/>
)
)
})}
</Switch>
</div>

</div>
);

}

export default FrontendLayout;