import React from "react";
import "./App.css";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {color: "lightblue"};
  }  
    changeStyle = () => {
        var newStyle = "purple"
        this.setState({
            color: newStyle
        });
    }

    render(){
        return(
        
        <div className= "profile" style={{backgroundColor: this.state.color}}>
            <h3>Photo</h3>
            <h3>{this.props.prenom} {this.props.nom}</h3>
            <h3>{this.props.date}</h3>
            <button className="bouton" onClick={this.changeStyle}>Change style</button>
        </div>
    );
    }
}
export default Profile;