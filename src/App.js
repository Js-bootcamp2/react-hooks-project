import {Routes, Route} from 'react-router-dom'
import 'antd/dist/antd.css';
import './App.css';

import Menu from './components/Menu/Menu';

import Home from './pages/Home/Home';
import Registration from './pages/Registration/Registration';
import Posts from './pages/Posts/Posts';
import PostDetails from './pages/Posts/PostDetails';

function App() {
  return (
    <div className="App">
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts" element={<Posts />} ></Route>
        <Route path="/posts/:id" element={<PostDetails />} />
        <Route path="/home" element={<Home />} />
        <Route path="/registration" element={<Registration />} />  

        <Route path="*" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
