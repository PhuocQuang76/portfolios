import React from "react";
import { useTranslation} from "react-i18next";
import classes from "./Experience.module.css"

const Experience = () => {
    const { t } = useTranslation();
    return (
        <div className={classes.content}>
            <h2>{t('experience_page')}</h2>
            <div>

                <h3>{t('year_1')}</h3>
                <p>{t('work_title_1')}</p>
                <span>
                <p>{t('work_detail_1_1')}</p>
                <p>{t('work_detail_1_2')}</p>
                </span>
            </div>

            <div>

                <h3>{t('year_2')}</h3>
                <p>{t('work_title_2')}</p>
                <span>
                <p>{t('work_detail_2_1')}</p>
                <p>{t('work_detail_2_2')}</p>
                <p>{t('work_detail_2_3')}</p>
                <p>{t('work_detail_2_4')}</p>
                <p>{t('work_detail_2_5')}</p>
                </span>

            </div>

            <div>

                <h3>{t('year_3')}</h3>
                <p>{t('work_title_3')}</p>
                <span>
                <p>{t('work_detail_3_1')}</p>
                <p>{t('work_detail_3_2')}</p>
                </span>
            </div>

            <div>

                <h3>{t('year_4')}</h3>
                <p>{t('work_title_4')}</p>
                <span>
                <p>{t('work_detail_4_1')}</p>
                <p>{t('work_detail_4_2')}</p>
                <p>{t('work_detail_4_3')}</p>
                <p>{t('work_detail_4_4')}</p>
                </span>
            </div>

            <div>

                <h3>{t('year_5')}</h3>
                <p>{t('work_title_5')}</p>
                <span>
                <p>{t('work_detail_5_1')}</p>
                <p>{t('work_detail_5_2')}</p>
                <p>{t('work_detail_5_3')}</p>
                <p>{t('work_detail_5_4')}</p>
                </span>
            </div>


        </div>
    )
}

export default Experience;