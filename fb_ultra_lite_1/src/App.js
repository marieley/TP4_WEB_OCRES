import React from "react";
import Profile from "./Profile";
import Post from "./Post";

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = { id : 0 };
  }

  state = {
    profiles : [
      {
        id : 1,
        user : {
          nom : "Noel",
          prenom : "Jeanne",
          date : "25/08/1999"
        },
        post : {
          message : "Je suis Jeanne Noel."
        }
      },
      {
        id : 2,
        user : {
          nom : "Leygue",
          prenom : "Martine",
          date : "06/04/1949"
        },
        post : {
          message : "Je m'appelle Martine."
        }
      },
      {
        id : 3,
        user : {
          nom : "Lelouch",
          prenom : "Claude",
          date : "30/10/1939"
        },
        post : {
          message : "Bonjour, je m'appelle Claude."
        }
      }
    ]
  }

  changeUser = (value) => {
    this.setState({ id: value });
}

    render(){
      return (
        <div className="app">
          <div>
            <button className="user" onClick={this.changeUser}>Jeanne</button>
            <button className="user" onClick={this.changeUser}>Martine</button>
            <button className="user" onClick={this.changeUser}>Claude</button>
          </div>
          <h3>{this.state.id}</h3>
          <Profile id="1" prenom="Jeanne" nom="Noel"/>
          <Post message="kbvvbbibinbi"/>
          <h3>{this.state.id}</h3>
        </div>
      );
  }
}

export default App;