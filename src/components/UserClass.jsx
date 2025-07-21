import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props.name, "Child Constructor");
    this.state = {
      count: 0,
      rating: 5,
    };
  }
  render() {
    console.log(this.props.name, "Child Render");
    const { name, location } = this.props;
    const { count, rating } = this.state;
    return (
      <div>
        <h2>User : {name}</h2>
        <h3>Location : {location}</h3>
        <h4>Contact</h4>
        <span>
          COUNT : {count}, RATING : {rating}
        </span>
        <br />
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Count++
        </button>
      </div>
    );
  }

  componentDidMount() {
    console.log(this.props.name, "Child componentDidMount");
  }

  componentDidUpdate() {
    console.log(this.props.name, "Child componentDidUpdate");
  }
}

export default UserClass;
