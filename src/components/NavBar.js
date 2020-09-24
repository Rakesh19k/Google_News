import React from 'react'


const Bar = {
    color : "white",
    fontSize : 22,
}

function NavBar() {
    return (
            <nav className="navbar navbar-expand-lg bg-dark mb-2">
                <a href="#" className="nav-item ml-4" style={Bar}>
                    <i className="fa fa-bars"></i>
                </a>
                <h4 className="nav-item ml-5 mt-2" style={{color:"white"}}>News</h4>
            </nav>
    
    )
}

export default NavBar
