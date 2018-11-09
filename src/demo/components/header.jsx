import React from 'react';

import './header.css';
import { NavLink, withRouter } from 'react-router-dom';
import homeRoutes from '../routes/homeRoutes.js';

class Header extends React.Component{

  state = {
    activeLink: ''
  }

  componentWillMount(){
    this.state.activeLink = '/home'
  }

  render(){


    let links = [];
    homeRoutes.map( route => {
      if (route.link) links.push(route)
      }
    )

    return(
      <div className="header">
        <div className="header-links">
          {
            links.map( link =>
            <NavLink to={ { pathname : link.path}}
                     key = {link.path}
                  onClick={ () => { this.setState({ activeLink : link.path }) } }>
              <div className={`header-link ${ this.state.activeLink === link.path ? 'active' : ''}`}>
                {link.title}
              </div>
            </NavLink>
            )
          }
        </div>

      </div>
    )

  }

}

export default withRouter(Header)