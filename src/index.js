import { createStore } from "redux";


// store는 state data를 저장하는 곳

// const add = document.getElementById("add");
// const minus = document.getElementById("minus");
// const number = document.querySelector("span");

// const ADD = "ADD";
// const MINUS = "MINUS";


// // reducer는 function이며 데이터를 변경한다.
// // return 하는 것은 Application의 데이터가 된다.
// const countModifier = (count = 0, action) => {
//     // 유일하게 state 데이터를 바꿀 수 있는 곳 (action을 통해서)
//     // action은 redux에서 function을 부를 때 쓰는 두번째 parameter
//     switch (action.type) {
//         case ADD:
//             return count + 1;
//         case MINUS:
//             return count - 1;
//         default:
//             return count;
//     }
// }

// const countStore = createStore(countModifier);

// //subscribe는 store 안에 있는 변화들을 알 수 있게 해준다.
// const onChange = () => {
//     number.innerText = countStore.getState();
// }
// countStore.subscribe(onChange); // store에 변화가 있을 때마다 감지해서 onChnage 호출

// // dispatch를 사용해서 action을 보낼 수 있음
// // dispatch와 함께 countModifier로 메시지를 보낸다. (dispatch가 Reducer를 current state와 action을 더해서 보냄.)
// // action은 type을 반드시 포함해서 보내야 한다.

// // countStore.dispatch({type:"ADD"});
// // countStore.dispatch({type:"ADD"});
// // countStore.dispatch({type:"ADD"});
// // countStore.dispatch({type:"ADD"});
// // countStore.dispatch({type:"ADD"});
// // countStore.dispatch({type:"MINUS"});

// // console.log(countStore.getState());

// add.addEventListener("click", () => countStore.dispatch({ type: ADD }));
// minus.addEventListener("click", () => countStore.dispatch({ type: MINUS }));

// TODO LIST
const form = document.querySelector("form");
const input = document.querySelector("input");
const ul = document.querySelector("ul");

const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";

// action creator
// action만 return 한다.
const addToDo = (text) => {
    return {
        type: ADD_TODO, 
        text,
        id: Date.now()
    }
}

const deleteToDo = id => {
    return {
        type: DELETE_TODO, 
        id
    }
}

// 상태를 수정하는 것이 아닌 항상 새로운 상태를 보내야한다.(절대 Muutate state 하지마라)
const reducer = (state = [], action) => {
    switch (action.type) {
        case ADD_TODO:
            return [...state, { text: action.text, id: action.id }];
        case DELETE_TODO:
            return state.filter(toDo => toDo.id !== action.id); // filter된 new array를 반환한다.
        default:
            return state;
    }
}

const store = createStore(reducer);

store.subscribe(() => console.log(store.getState()));

const dispatchAddToDo = (text) => {
    store.dispatch(addToDo(text));
}

const dispatchDeleteToDo = (e) => {
    const id = parseInt(e.target.parentNode.id); // id 가져오기
    store.dispatch(deleteToDo(id));
}

const paintToDos = () => {
    const toDos = store.getState();
    ul.innerHTML = ""; // clean list
    toDos.forEach(toDo => {
        const li = document.createElement("li");
        const btn = document.createElement("button");
        btn.innerText = "DEL";
        btn.addEventListener("click", dispatchDeleteToDo);
        li.id = toDo.id;
        li.innerText = toDo.text;
        li.appendChild(btn);
        ul.appendChild(li); 
    });
}

store.subscribe(paintToDos); // 변화를 감지하여 다시 html을 repaint 한다.

const onSubmit = e => {
    e.preventDefault();
    const toDo = input.value;
    input.value = "";
    dispatchAddToDo(toDo);
}

form.addEventListener("submit", onSubmit);