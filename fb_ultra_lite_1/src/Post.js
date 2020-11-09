import React from "react";
import "./App.css";

class Post extends React.Component {
    constructor(props) {
        super(props);
        this.state = {count: 0};
    }

    increment = () => {
        this.setState({ count: this.state.count + 1 });
    }

    render(){
        return(
            <div className= "post">
                <h3>{this.props.message}</h3>
                <button className="bouton" onClick={this.increment}>C'est super !</button>
                <h3>{this.state.count}</h3>
            </div>
        );
    }
}
export default Post;

