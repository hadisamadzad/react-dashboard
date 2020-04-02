import React from 'react';
import { connect } from 'react-redux';
import { addAsset } from '../actions/assets';

const AddAssetPage = (props) => (
    <div>
        <h1>Add Asset</h1>
        <ExpenseForm onSubmit={(asset) => {
            props.dispatch(addAsset(asset))
            props.history.push('/')
        }} />
    </div>
);

export default connect()(AddAssetPage)