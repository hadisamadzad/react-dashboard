import { v4 as uuidv4 } from 'uuid'

export const addUser = ({
    id = uuidv4(),
    mobile = '',
    email = '',
    firstName = '',
    lastName = '',
    password = ''
} = {}) => ({
    type: 'ADD_USER',
    user: {
        id,
        mobile,
        email,
        firstName,
        lastName,
        password
    }
});

export const editUser = (id, updates) => ({
    type: 'EDIT_USER',
    id,
    updates
});