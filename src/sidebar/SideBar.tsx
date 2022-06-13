import React, {useState} from 'react';
import * as FaIcons from 'react-icons/fa';
import {AnimatePresence, motion} from "framer-motion";
import classes from './Sidebar.module.css';
import {Link, NavLink} from "react-router-dom";
import { SideBarData} from "../data/SidebarData";
import Header from "../header/Header";
import { useTranslation } from "react-i18next";

type Props = {
    children?: JSX.Element | JSX.Element[];
}
const sidebar = [
    "about","education","skills","experience","contact_me"
]

const SideBar =  ({children}:Props) => {
    const {t} = useTranslation();
    const SidebarData = SideBarData;
    const [isOpen, setIsOpen] = useState(false);
    const toggle =() => setIsOpen(!isOpen);

    const showAnimation =  {
        hidden:{
            width:0,
            opacity:0,
            transition:{
                duration:0.5,
            },
        },

        show:{
            width:'auto',
            transition:{
                duration:0.2,
            },
            opacity: 1,

        }
    }

    return(
        <div className={classes.main_container}>
           <motion.div animate={{width:isOpen ? "200px": "40px"}} className={classes.sidebar}>
               <div className={classes.top_section}>
                   {isOpen &&
                   <motion.h1
                       variants={showAnimation}
                       initial="hidden"
                       animate="show"
                       exit="hidden"
                       className={classes.logo}
                   >
                       {t('content')}
                   </motion.h1>}
                   <div className={classes.bars}>
                       <FaIcons.FaBars onClick={toggle}/>
                   </div>
               </div>

               <section className="classes.sidebarMenu">
                   {SidebarData.map((route) => (
                       <NavLink
                           activeClassName={classes.active}
                           to={route.path}
                           key={route.name}
                           className={classes.link}>
                           <div className={classes.icon}>
                               {route.icon}
                           </div>
                           <AnimatePresence>
                               {isOpen &&
                               <motion.div variants={showAnimation}
                                           initial="hidden"
                                           animate="show"
                                           exit="hidden"
                                           className={classes.link_text} >
                                  {t(route.name)}
                               </motion.div>}
                           </AnimatePresence>
                       </NavLink>
                   ))}
               </section>
           </motion.div>

            <main className={classes.main}>
                <Header/>

                <div className={classes.children}>
                    {children}
                </div>
            </main>
        </div>
    )
}
export default SideBar;