import React from 'react';
import {HashRouter as Router, Routes, Route} from 'react-router-dom';
import Home from '../routes/Home';
import Detail from '../routes/Detail';

const App = () => {
    return (
    <Router>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/:id" element={<Detail/>} /> {/*/:id는 id값이 입력한 주소값에 들어간다는 의미*/}
        </Routes>
    </Router>
    );
}

export default App;
