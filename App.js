import React  from "react";
import ReactDOM from "react-dom/client";

// const jsx=(
//     <React.Fragment>
//         <h1>hi1</h1>
//         <h1>hi2</h1>
//     </React.Fragment>
// )

// const jsx=(
//     <>
//         <h1>hi1</h1>
//         <>
//         <h1>hi2</h1>
//         <h1>hi3</h1>
//         </>
       
//     </>
// )

const Title =()=>(
    <a href="/">
     <img className="logo" alt="logo" src="https://media-cdn.tripadvisor.com/media/photo-s/1c/58/cd/b8/logo.jpg" />
     </a>
);


const Header=()=>{
    return (

        <div className="header">
            <Title/>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

const root=ReactDOM.createRoot(document.getElementById("root"));
//  root.render(HeaderComponent());
 root.render( <Header/>)
