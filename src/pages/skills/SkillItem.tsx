import classes from "./SkillItem.module.css";
import SkillDetail from "./SkillDetail";
import {useState} from "react";

import { RootState } from '../../store/store';
import { useSelector, useDispatch} from "react-redux";
import { closeFormActions } from '../../store/slices/closeFormSlice';

const SkillItem:React.FC<{techName:string, level:string,detail:string}> = (props) => {
//     const [isClose, setIsClose] = useState(false);
//     const clear = () => {
//         setIsClose(false);
//     }
    const isOpen = useSelector((state:RootState) => state.closeForm.isOpen);
    const dispatch = useDispatch();
    const showDetailHandler = () => {
        dispatch(closeFormActions.openForm());
    }

    return(
       <div className={classes.content}>
           {isOpen && <SkillDetail

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