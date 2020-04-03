import { v4 as uuidv4 } from 'uuid'

export const addUser = ({
    id = '',
    mobile = '',
    email = '',
    password = '',
    firstName = '',
    lastName = ''
} = {}) => ({
    type: 'ADD_USER',
    user: {
        id: uuidv4(),
        mobile,
        email,
        password,
        firstName,
        lastName
    }
});

export const editUser = (id, updates) => ({
    type: 'EDIT_USER',
    id,
    updates
});