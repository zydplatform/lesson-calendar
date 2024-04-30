import Home from '../src/frontend/Home';
import Page403 from '../src/PageErrors/Page403';
import Page404 from '../src/PageErrors/Page404';
import Register from '../src/frontend/auth/Register';
import Login from '../src/frontend/auth/Login';


const publicRoutes = [
{ path: '/', exact: true, name: 'Home', component: Home },
{ path: '/403', exact: true, name: 'Page403', component: Page403 },
{ path: '/404', exact: true, name: 'Page404', component: Page404 },
{ path: '/login', exact: true, name: 'Login', component: Login },
{ path: '/register', exact: true, name: 'Register', component: Register },
];

export default publicRoutes;