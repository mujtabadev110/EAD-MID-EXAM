    import React from 'react';
    import {Link} from 'react-router-dom';

    class Navbar extends React.Component {
        render() {
            return (
                <div>

<nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link to={"/"} className="navbar-brand">Navbar</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">

                    <li className="nav-item active">
                    <Link to={"/getUsers"} className="nav-link"><span>All Users</span></Link>
                </li>

            <li className="nav-item">
            <Link to={"/createUser"} className="nav-link"><span>create User</span></Link>
            </li>
        </ul>
        </div>
    
    </nav>


                </div>

            )


            }
        }

    export default Navbar;