
import classes from "./SkillDetail.module.css";
import React from 'react';
import { useTranslation } from "react-i18next";

const SkillDetail:React.FC<{techName:string,detail:string,onClose:()=>void }>= (props) => {
    const { t } = useTranslation();
    return(
        <React.Fragment>
            <div className={classes.backdrop}  onClick={props.onClose}/>
                <div className={classes.detail_modal}>
                    <h4>{props.techName} {t('skills_page')}: </h4>
                    <p>{t(props.detail)}</p>
                    <div className={classes.detail_modal__actions}>
                        <button
                            type="button"
                            onClick={props.onClose}
                         >
                            close
                        </button>
                    </div>
                </div>

        </React.Fragment>

    )
}

export default SkillDetail;