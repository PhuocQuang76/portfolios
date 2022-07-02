import React from "react";
import { useTranslation } from "react-i18next";
import { EducationData } from "../../data/EducationData";
import classes from "./Education.module.css"

const Education = () => {
    const { t } = useTranslation();
    return (
        <div className={classes.content}>
            <h2>{t('education_page')}</h2>
            <ul>
                {EducationData.map((school) => (
                    <li key={school.title}>
                        {t(school.title)} - {t(school.field)}
                       <br/>
                        <span>{school.icon} {t(school.schoolName)} - {t(school.year)}</span>

                    </li>
                ))}
            </ul>
        </div>
    )
}
export default Education;