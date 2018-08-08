import React from 'react';
import Logo from '../Logo/Logo';
import Menu from '../Menu/Menu';
import './Sidebar.css'

const Sidebar = () => {
    return (
        <aside className="aside">
            <Logo/>
            <Menu menu={[
                {text: 'Main', link: '#', submenu: []},
        
                {text: 'Interesting', link: '#', submenu: [
                    {text: 'Artist', link: '#'},
                    {text: 'Albums', link: '#'},
                    {text: 'Songs', link: '#'},                        
                ]},
        
                {text: 'Favourite', link: '#', submenu: [
                    {text: 'Artist', link: '#'},
                    {text: 'Albums', link: '#'},
                    {text: 'Songs', link: '#'},  
                ]},

                // {text: 'Playlist', link: '#', submenu: []},
                // {text: 'Pay', link: '#', submenu: []},
            ]}/>
        </aside>
    )
};

export default Sidebar;