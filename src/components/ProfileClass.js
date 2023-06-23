import React from "react";

class Profile extends React.Component{
    render(){
        
        return(
            <div>
                <h2>Profile Class Component</h2>
                <h3>Name:{this.props.name}</h3>
            </div>
        )
    }
}

export default Profile;