import React from "react";
import { Languages,DevOpps } from "../../data/SkillsData";
import SkillItem from "./SkillItem";
import classes from "./SkillsList.module.css";
import { useTranslation} from "react-i18next";

const SkillsList = () => {
    const { t } = useTranslation();
    const skillTitles = [{title:"languages"},{title:"DevOpps"}];
    return (
        <div className={classes.content}>

            <h2 >{t('skills_page')}</h2>

            {skillTitles.map((skillTitle) => (
                <div>
                    <h4 className={classes.content_space}>{t(skillTitle.title)}</h4>
                    <ul className={classes.content}>
                        {Languages.map((skill) => (
                            <SkillItem
                                key={skill.id}
                                techName={skill.techName}
                                level={skill.level}
                                detail={skill.detail}
                            />
                        ))}
                    </ul>
                </div>
             ))}
        </div>
    )
}

export default SkillsList;