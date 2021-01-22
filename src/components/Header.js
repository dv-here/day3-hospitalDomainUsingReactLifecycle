import React, { Component } from 'react'
import {Navbar,Nav} from 'react-bootstrap'
import {BrowserRouter as Router,Route,Link} from 'react-router-dom'
import Home from './Home';
import About from './About';
import Appointment from './Appointment';
import Locations from './Locations';
import Contact from './Contact'

export class Header extends Component {
    render() {
        return (
            <>
            <Router>
                        <Navbar bg="dark" variant="dark">
                            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                                <Nav className="mr-auto float-right" >
                                    <Link to='/home' className='mx-5'>Home</Link>
                                    <Link to='/about' className='mx-5'>About Us</Link>  
                                    <Link to='/appointment' className='mx-5'>Appointment</Link> 
                                    <Link to='/locations' className='mx-5'>Locations</Link> 
                                    <Link to='/contact' className='mx-5'>Contact Us</Link>
                                </Nav>
                        </Navbar>
                        <Route exact path='/' component={Home} />
                        <Route exact path='/home' component={Home} />
                        <Route exact path='/about' component={About} />
                        <Route exact path='/appointment' component={Appointment} />
                        <Route exact path='/locations' component={Locations} />
                        <Route exact path='/contact' component={Contact} />
            </Router>
</>
        )
    }
}

export default Header
