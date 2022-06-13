import React from "react";
import { useTranslation} from "react-i18next";

const Experience = () => {
    const { t } = useTranslation();
    return (
        <div>
            <h2>{t('experience_page')}</h2>

        </div>
    )
}

export default Experience;