import React, {useState} from "react";
import { connect } from "react-redux";
import ToDo from "../components/ToDo";
import { actionCreator } from "../store";

const Home = ({toDos, addToDo}) => {
    const [text, setText] = useState("");
    const onChange = e => {
        setText(e.target.value);
    }
    const onSubmit = e => {
        e.preventDefault();
        setText("");
        addToDo(text);
    }
    return (
        <>
            <h1>Home</h1>
            <form onSubmit={onSubmit}>
                <input type="text" value={text} onChange={onChange} />
                <button>Add</button>
            </form>
            <ul>{toDos.map(toDo => <ToDo {...toDo} key={toDo.id} />)}</ul>
        </>
    );
}


// mapStateToProps는 두 종류의 argument와 함께 호출되는 function이다.
// 첫번째 argument는 Redux store에서 온 state이다.
// 두번째 argument는 component의 props이다.

// function의 이름은 기본적으로 mapStateToProps이어야 한다.
// Redux state로부터 home(Component)에 Prop을 전달한다는 의미
const mapStateToProps = (state, ownProps) => {
    // connect()는 Home으로 보내는 props에 추가될 수 있도록 허용해준다.
    // 무엇이든 return 하면 컴포넌트의 prop으로 추가된다.
    //return {sexy:true}; 
    return { toDos: state };
}

// dispatch와 ownProps를 갖게된다.
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        addToDo: text => dispatch(actionCreator.addToDo(text))
    };
}


// connect는 두 가지 argument를 갖는다.(mapStateToProps, mapDispatchToProps) -> state와 dispatch
export default connect(mapStateToProps, mapDispatchToProps)(Home);