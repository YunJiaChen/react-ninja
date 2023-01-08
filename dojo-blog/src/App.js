
import Navbar from './Navbar';
import Home from './Home';
function App() {
  // const title = 'Welcome to the new blog';
  // const likes = 20;
  // const link = "http://www.google.com";
  return (
    <div className="App">
      <Navbar/>
      <div className="content">
        <Home/>
        {/* <h1>{ title }</h1>
        <p>Liked { likes } times</p>
        <p>{ 20 }</p>
        <p>{ "hello Rita" }</p>
        <p>{ [1,3,5,7,9] }</p>
        <p>{ Math.random()*100 }</p>
        <a href={link}>Go to Google</a> */}
        
      </div>
    </div>
  );
}

export default App;
