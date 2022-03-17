import { useEffect } from 'react';
import { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import './App.css';
import About from './components/about/About';
import Interest from './components/interest/interest';
import Skill from './components/skill/skill';
function App() {
 const [posts, setPosts] = useState([])
 useEffect(() => {
  fetch('https://my.api.mockaroo.com/mydata.json?key=065d2220')
  .then(res => res.json())
  .then(post => {
    setPosts(post);
  })
},[])

  


  return (
    
    <div className="container">
      <div className="navbar">
        <Link to ="/"><i className="fa fa-home" aria-hidden="true"></i></Link>
        <Link to ="/Skill">KỸ NĂNG</Link>
        <Link to ="/Interest">SỞ THÍCH</Link>
        <Link to ="#contact">ĐỊNH HƯỚNG</Link>
      </div>
      <div className="header">
        <div className="App-main">
          <img src={require('./components/image/ab.jpg')} />

          {posts.map(post => (
           <div key={post.id}>
            <h2>{post.name}</h2>
            <h3><i className="fa fa-birthday-cake" aria-hidden="true"></i> {post.date} </h3>
            <h3><i className="fa fa-home" aria-hidden="true"></i> {post.home} </h3>
            <h3><i className="fa fa-map-marker" aria-hidden="true"></i> {post.address} </h3>
            <h3><i className="fa fa-phone" aria-hidden="true"></i> {post.phone} </h3>
            <h3><i className="fa fa-envelope" aria-hidden="true"></i> {post.email}</h3>
            </div>
          ))}
        </div>
      
          <Routes>
            <Route path='/' element={<About prop={posts} />} />
            <Route path='/Skill' element={<Skill prop={posts}/>} />
            <Route path='/Interest' element={<Interest prop={posts}/>} />
          </Routes>


      </div>
    </div>
  );
}

export default App;
