const Content = ()=>{

    const handleNameChange = () => {
        const names = ["asim", "abcd", "xyz"];
        const ran = Math.floor(Math.random() * 3);
        return names[ran];
    };

    const handleClick = ()=>{
        console.log("clicked");
    }
    const handleClick2 = (name)=>{
        console.log(`${name} was clicked`);
    }
    const handleClick3 = (e)=>{
        console.log(e.target.innerText);
    }

    return(
        <main>
            <p onDoubleClick={handleClick}>
                {handleNameChange()}
            </p>
            <button onClick={handleClick}>Click it</button>
            <button onClick={()=> {handleClick2('TEST')}}>Click it</button>
            <button onClick={(e)=> {handleClick3(e)}}>Click it</button>
        </main>
    )
}

export default Content