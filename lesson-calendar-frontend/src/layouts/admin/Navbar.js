import React, {} from 'react';
import {Link, useHistory} from 'react-router-dom';
import swal from 'sweetalert';
import axios from 'axios';

function Navbar() {

const history = useHistory();

const logoutSubmit = (e) => {
e.preventDefault();

axios.post(`/api/logout`).then(res => {
if(res.data.status === 200)
{
localStorage.removeItem('auth_token');
localStorage.removeItem('auth_name');
swal("Success",res.data.message,"success");
history.push('/');
}
});
}

var AuthButtons = '';
if(!localStorage.getItem('auth_token'))
{
AuthButtons = (
<ul className="navbar-nav">

<li className="nav-item">
<Link className="nav-link" to="/login">Login</Link>
</li>
<li className="nav-item">
<Link className="nav-link" to="/register">Register</Link>
</li>
<li className="nav-item">
<Link className="nav-link" to="/contact">Contact</Link>
</li>
</ul>
);
}
else
{
AuthButtons = (
<li className="nav-item">
<li><Link className="dropdown-item" onClick={logoutSubmit}>Logout</Link></li>
</li>
);
}

return (
<nav className="navbar navbar-expand-lg navbar-light bg">
<Link className="navbar-brand ps-3" to="/admin">LOGO</Link>
<form className="d-none d-md-inline-block form-inline ms-auto me-0 me-md-3 my-2 my-md-0">
<div className="input-group">
<input className="form-control" type="text" placeholder="Search for..." aria-label="Search for..." aria-describedby="btnNavbarSearch" />
<button className="btn btn-primary" id="btnNavbarSearch" type="button"><i className="fas fa-search"></i></button>
</div>
</form>

<ul className="navbar-nav ms-auto ms-md-0 me-3 me-lg-4">
<li className="nav-item dropdown">
<Link to="#" className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
<i className="fas fa-user fa-fw"></i>
</Link>
<ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
<li><hr className="dropdown-divider" /></li>
{AuthButtons}
</ul>
</li>
</ul>
</nav>
);
}

export default Navbar;