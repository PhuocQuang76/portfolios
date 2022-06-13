import React from "react";
import classes from "./About.module.css";
import {PersonContactData}  from "../../data/PersonContactData";
import { useTranslation } from "react-i18next";
const About = () => {
    const candidateName = PersonContactData.name;
    const { t } = useTranslation();
    return (
        <div className={classes.content}>
            <h2>{t('about_me')}</h2>
            <p> {t('my_name', {candidateName})}</p>
            <p>{t('about_me_content')}</p>

        </div>
    )
}

export default About;