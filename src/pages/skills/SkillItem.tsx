import classes from "./SkillItem.module.css";
import SkillDetail from "./SkillDetail";
import { RootState } from '../../store/store';
import { useSelector, useDispatch} from "react-redux";
import { formActions } from '../../store/slices/formSlice';
import { skillSetActions } from '../../store/slices/skillSetSlice';

const SkillItem:React.FC<{id:number, techName:string, level:string,detail:string}> = (props) => {
    const isOpen = useSelector((state:RootState) => state.closeForm.isOpen);
    const dispatch = useDispatch();


    const showDetailHandler = () => {
        dispatch(formActions.openForm());
        dispatch(skillSetActions.setSkillSet({
            id : props.id,
            techName : props.techName,
            level : props.level,
            detail : props.detail,
        }))
        console.log("test: " + props.techName);
    }

    return(
       <div className={classes.content}>
           {isOpen && <SkillDetail/>}

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