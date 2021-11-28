import React from "react";
//import { useParams } from "react-router";
import { connect } from 'react-redux';
import { useParams } from "react-router";

// Router에 /:id는 주소에 id값이 들어간다는 의미이며 useParams로 받아올 수 있다. 
//const id = useParams(); 여기서는 굳이 쓸 필요없고 ownProps에서 받아오면 된다.
const Detail = ({toDo}) => {
    //console.log(props);
    return (
        <>
            <h1>{toDo?.text}</h1>
            <h5>Created at: {toDo?.id}</h5>
        </>
    );
}

const mapStateToProps = (state, ownProps) => {
    // empty가 자꾸 나옴.
    console.log(state, ownProps);
    const {
        match:{
            params:{ id }
        }
    } = ownProps;

    //const id = ownProps.match.params.id;
    return {toDos:state.find(toDo => toDo.id === parseInt(id))};
}

export default connect(mapStateToProps)(Detail);