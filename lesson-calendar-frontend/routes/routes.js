import Dashboard from '../src/admin/Dashboard';

const routes = [
{ path: '/admin', exact: true, name: 'Admin' },
{ path: '/admin/Dashboard', exact: true, name: 'Dashboard', component: Dashboard },

];

export default routes;