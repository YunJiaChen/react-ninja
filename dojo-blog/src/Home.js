import { useState } from "react";
const Home = () => {
    const [name, setName] = useState('Rita');
    const [age, setAge] = useState('28');
    const handleClick = () =>{
        // console.log('hello,Rita',e);
        setName('Mark');
        setAge('27');
    }
    // const handleClickAgain = (name,e) =>{
    //     console.log('hello,'+ name,e.target);
    // } lesson#7 ClickEvent

    return (  
        <div className="home">
            <h2>Homepage</h2>
            <p>{ name } is { age } years old</p>
            <button onClick={handleClick}>Click me</button>
            {/* <button onClick={(e) => handleClickAgain('Cindy',e)}>Click me again</button>lesson#7 ClickEvent */}
        </div>
    );
}
 
export default Home;
