import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import '../../assets/admin/css/styles.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';

import Navbar from './Navbar';

import routes from '../../routes/routes';

const MasterLayout = () => {

return (
<div>

<Navbar />

<main>

<Switch>

{routes.map((route, idx) => {
return (
route.component && (
<Route
key={idx}
path={route.path}
exact={route.exact}
name={route.name}
render={(props) => (
<route.component {...props} />
)}
/>
)
)
})}
<Redirect from="/admin" to="/admin/dashboard" />
</Switch>

</main>
</div>
);

}

export default MasterLayout;