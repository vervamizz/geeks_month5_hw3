export const FETCH_USERS = 'FETCH_USERS';


export  const finishedGetAsyncData = (data) => {
    return{
        type: FETCH_USERS,
        payload: data
    }
}

export  const fetchAsyncDataPersons = () => {
    return async (dispatch) => {
        try {
            const response  = await  fetch('https://jsonplaceholder.typicode.com/users')
            const json = await response.json();
            dispatch(finishedGetAsyncData(json))
        }catch (e){
            console.error(e)
        }
    }
}