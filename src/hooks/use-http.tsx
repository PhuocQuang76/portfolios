import { useReducer} from 'react';

type InitialType = {
    status : string,
    message : string,
    isSend : boolean,
}

type ValueType = {
    status:string,
    message:string,
}

type actionType = {
    type:'POST' ,
    value:ValueType,
}

const initialState = {
    status :"",
    message :"",
    isSend: false
}

const reducer = (state : InitialType, action : actionType) => {
    if( action.type === 'POST' ){
    return async () => {
            const sendRequest = async() => {
                const response = await fetch('https://react-http-f69a0-default-rtdb.firebaseio.com/pofolio.json',{
                    method: 'POST',
                    body:JSON.stringify(action.value),
                    headers:{
                        'Content-Type': 'application/json'
                    },
                });

                if(!response.ok){
                    throw new Error("Sending form is failed !")
                }
            };

            try{
                await sendRequest ();
                state.status = "Success";
                state.message = "Thank you very much for your message.I will contact you soon!";
            }catch(error){
                state.status = "Error";
                state.message = "Sending form data failed!";
            }
        }
    }
}

const useHttp = () => {
  //  const [state, dispatch] = useReducer(reducer,initialState);



}
