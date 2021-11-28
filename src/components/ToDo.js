import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { actionCreator } from '../store';

const ToDo = ({ text, onBtnClick, id }) => {
    return (
        <li>
            <Link to={`/${id}`}>
            {text} <button onClick={onBtnClick}>DEL</button>
            </Link>
        </li>
    )
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onBtnClick: () => dispatch(actionCreator.deleteToDo(ownProps.id))
    }
}

export default connect(null, mapDispatchToProps)(ToDo);
