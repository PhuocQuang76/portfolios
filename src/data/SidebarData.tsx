import React from 'react';
import * as FaIcons from 'react-icons/fa';

export const SideBarData = [
    {
        name:'about',
        path:'/',
        icon:<FaIcons.FaHome />
    },
    {
        name:'education',
        path:'/education',
        icon:<FaIcons.FaGraduationCap />
    },
    {
        name:'skills',
        path:'/skills',
        icon:<FaIcons.FaRegLightbulb />
    },
    {
        name:'experience',
        path:'/experience',
        icon:<FaIcons.FaBuffer />
    },
    {
        name:'contact_me',
        path:'/contact',
        icon:<FaIcons.FaMailBulk />
    }
]