import React from 'react';
import { NavLink } from 'react-router-dom';
import { SocialIcon } from 'react-social-icons';

function NavBar() {

  return (
    <header className="bg-blue-300 hover:bg-blue-400">
        <div className="container mx-auto flex justify-between">
            <nav className="inline-flex self-center flex-1 ml-10">
                <NavLink
                    to={"/"}
                    className={"inflex-flex items-center py-6 px-3 mr-4 text-red-400 hover:text-white text-4xl font-bold cursive tracking-widest"}
                >
                    Sanjeev
                </NavLink>
                <NavLink
                    to={"/Post"}
                    className={"inflex-flex items-center py-3 px-3 my-6 rounded text-red-400 hover:text-yellow-200 hover:bg-red-900 hover:rounded-xl font-bold"}
                >
                    Blog Post
                </NavLink>
                <NavLink
                    to={"/Projects"} 
                    className={"inflex-flex items-center py-3 px-3 my-6 rounded text-red-400 hover:text-yellow-200 hover:bg-red-900 hover:rounded-xl font-bold"}>
                    Projects
                </NavLink>
                <NavLink
                    to={"/About"}
                    className={"inflex-flex items-center py-3 px-3 my-6 rounded text-red-400 hover:text-yellow-200 hover:bg-red-900 hover:rounded-xl font-bold"}>
                    About Me
                </NavLink>
            </nav>
            <div className='inline-flex py-3 px-3 my-6 self-end'>
                <SocialIcon url='https://twitter.com/SanjeevAshrit1' className='mr-4' target={'_blank'} fgColor={'#fff'} style={{height: 35, width: 35}}/>
                <SocialIcon url='https://www.instagram.com/ashrithsanjeev/?igshid=YmMyMTA2M2Y%3D' className='mr-4' target={'_blank'} fgColor={'#fff'} style={{height: 35, width: 35}}/>
                <SocialIcon url='https://www.linkedin.com/in/sanjeev-ashrit-6313251b7' className='mr-4' target={'_blank'} fgColor={'#fff'} style={{height: 35, width: 35}}/>
            </div>
        </div>
    </header>
  )
}

export default NavBar;
