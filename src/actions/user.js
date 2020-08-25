export const Types = {
    GET_USER_REQUEST: 'users/get_users_request',
    GET_USER_SUCCESS: 'users/get_users_success'
};

export const getUserRequest = () => ({
    type: Types.GET_USER_REQUEST
});

export const getUserSuccess = ({items}) => ({
    type: Types.GET_USER_SUCCESS,
    payload: {
        items
    }
});