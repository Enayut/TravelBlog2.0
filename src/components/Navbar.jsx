import React from 'react';

function Navbar() {
    return (
        <div className="w-screen">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="p-3">TravelBlog</h1>
                <ul className="nav-links flex flex-row items-center p-2">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Destinations</a></li>
                    <li><a href="#">Blog</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </div>
        </div>
    );
}

export default Navbar;