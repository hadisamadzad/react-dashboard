import { v4 as uuidv4 } from 'uuid'

// ADD_EXPENSE
export const addAsset = (
    {
        description = '',
        note = '',
        amount = 0,
        createdAt = 0
    } = {}
) => ({
    type: 'ADD_ASSET',
    expense: {
        id: uuidv4(),
        description,
        note,
        amount,
        createdAt
    }
});

// EDIT_ASSET
export const editAsset = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
});

// REMOVE_ASSET
export const removeAsset = (id) => ({
    type: 'REMOVE_ASSET',
    id
});