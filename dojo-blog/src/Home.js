const Home = () => {
    
    const handleClick = (e) =>{
        console.log('hello,Rita',e);
        
    }
    const handleClickAgain = (name,e) =>{
        console.log('hello,'+ name,e.target);
    //lesson#7 ClickEvent 
    } 

    return (  
        <div className="home">
            <h2>Homepage</h2>
            
            <button onClick={handleClick}>Click me</button>
            <button onClick={(e) => handleClickAgain('Cindy',e)}>Click me again</button>
        </div>
    );
}
 
export default Home;
