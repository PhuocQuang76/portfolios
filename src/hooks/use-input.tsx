import { useState} from 'react';
import { useReducer} from 'react';

type stateType = {
    value : string,
    isTouched : boolean,
}

type actionType = {
    type:'INPUT' |  'BLUR' | 'RESET',
    value:string,
}

const initialState : stateType= {
    value : '',
    isTouched : false,
}

const reducer = (state:stateType, action: actionType) => {
    if( action.type === 'INPUT' ){
        return{
           value : action.value,
           isTouched : state.isTouched,
        }
    }


    if( action.type === 'BLUR' ){
        return{
            value : action.value,
            isTouched : true,

        }
    }

    if( action.type === 'RESET' ){
        return{
            value: '',
            isTouched : false,
        }
    }

    return{
        value:'',
        isTouched: false
    }
}
/* ----------- start -----------*/

const UseInput = (validateValue:(value:string) => boolean) => {
/* ....................UseReducer................*/
    const [state, dispatch] = useReducer(reducer,initialState);


    //different validation, then use function
    const valueIsValid = validateValue(state.value);
    const hasError = !valueIsValid && state.isTouched;

    const valueChangeHandler = (event:React.ChangeEvent<HTMLInputElement>) => {
        dispatch({ type: 'INPUT', value: event.target.value });
    };

    const valueBlurHandler = () => {
        dispatch({type : 'BLUR', value: state.value });
    }

    const reset = () => {
        dispatch({ type: 'RESET' ,value:''});
    };



/* ....................UseState................
    const [enteredValue, setEnteredValue] = useState('');
    const [isTouched, setIsTouched] = useState(false);

    //different validation, then use function
    const valueIsValid = validateValue(enteredValue);
    const hasError = !valueIsValid && isTouched;

    const valueChangeHandler = (event:any)=> {
         setEnteredValue(event.target.value);
    }

    const valueBlurHandler = () => {
        setIsTouched(true);
    }

    const reset = () => {
        setEnteredValue('');
        setIsTouched(false);
    }

*/

    return {
            value:state.value,
            isValid:valueIsValid,
            hasError:hasError,
            reset:reset,
            valueChangeHandler:valueChangeHandler,
            valueBlurHandler:valueBlurHandler,
    };
};

export default UseInput;