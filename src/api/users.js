import { addUsersAction } from "../redux/customersReducer"

export const fetchUsers = () => {
    return function (dispatch) {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(json => dispatch(addUsersAction(json)))
    }
}