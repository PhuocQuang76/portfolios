import classes from "./SkillItem.module.css";
import SkillDetail from "./SkillDetail";
import {useState} from "react";

const SkillItem:React.FC<{techName:string, level:string,detail:string}> = (props) => {
    const [isClose, setIsClose] = useState(false);
    const clear = () => {
        setIsClose(false);
    }

    const showDetailHandler = () => {
        console.log("check onckick");
        console.log("isClose: " + isClose);
        setIsClose(true);
    }

    return(
       <div className={classes.content}>
           {isClose && <SkillDetail
                onClose={clear}
                techName={props.techName}
                detail={props.detail}
           />}

            <li
                onClick={showDetailHandler}
                className={classes.h2}
            >
                {props.techName} : <span className={classes.span}>({props.level} level)</span>
            </li>
       </div>

    )
}
export default SkillItem;