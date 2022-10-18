import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { SocialIcon } from 'react-social-icons';

function NavBar() {
    const [isHover, setIsHover] = useState(false);

    const handleMouseEnter = () => {
        setIsHover(true);
     };
     const handleMouseLeave = () => {
        setIsHover(false);
     };
  
     const boxStyle = {
        backgroundColor: isHover ? 'red' : 'transparent',
     };

  return (
    <header className="bg-red-600">
        <div className="container mx-auto flex justify-between">
            <nav className="inline-flex self-center flex-1 ml-10">
                <NavLink
                    to={"/"}
                    // activeClassName={"text-white"}
                    className={"inflex-flex items-center py-6 px-3 mr-4 text-red-100 hover:text-green-800 text-4xl font-bold cursive tracking-widest"}
                >
                    Sanjeev
                </NavLink >
                <NavLink
                    // onMouseEnter={handleMouseEnter}
                    // onMouseLeave={handleMouseLeave}
                    // style={boxStyle}
                    // activeClassName={"text-red-100 bg-red-700"}
                    to={"/Post"}
                    className={"inflex-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-800"}
                >
                    Blog Post
                </NavLink>
                <NavLink
                    // onMouseEnter={handleMouseEnter}
                    // onMouseLeave={handleMouseLeave}
                    // style={boxStyle}
                    // activeClassName={"text-red-100 bg-red-700"}
                    to={"/Projects"} 
                    className={"inflex-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-800"}>
                    Projects
                </NavLink>
                <NavLink 
                    // onMouseEnter={handleMouseEnter}
                    // onMouseLeave={handleMouseLeave}
                    // style={boxStyle}
                    // activeClassName={"text-red-100 bg-red-700"}
                    to={"/About"}
                    className={"inflex-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-800"}>
                    About Me
                </NavLink>
            </nav>
            <div className='inline-flex py-3 px-3 my-6 self-end'>
                <SocialIcon url='https://twitter.com/?lang=en-in' className='mr-4' target={'_blank'} fgColor={'#fff'} style={{height: 35, width: 35}}/>
                <SocialIcon url='https://www.instagram.com' className='mr-4' target={'_blank'} fgColor={'#fff'} style={{height: 35, width: 35}}/>
                <SocialIcon url='https://in.linkedin.com' className='mr-4' target={'_blank'} fgColor={'#fff'} style={{height: 35, width: 35}}/>
            </div>
        </div>
    </header>
  )
}

export default NavBar;
