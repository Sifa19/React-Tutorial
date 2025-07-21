import { Component } from "react";
import User from "./User";
import UserClass from "./UserClass";

class AboutUs extends Component {
  constructor(props) {
    super(props);
    console.log("Parent Constructor");

    this.state = {
      userInfo: {
        name: "Dummy",
        location: "default",
      },
    };
  }
  render() {
    console.log("Parent Render");
    const { name, location } = this.state.userInfo;
    return (
      <div>
        {/* <User name={"Prachita (Function)"} location={"Goa"} /> */}
        <UserClass name={name} location={location} />
        <UserClass name={"Second (Class)"} location={"Bengaluru"} />
      </div>
    );
  }

  async componentDidMount() {
    console.log("Parent componentDidMount");

    const data = await fetch("https://api.github.com/users/Sifa19");
    const json = await data.json();

    console.log(json);

    this.setState({
      userInfo: json,
    });
  }
}

// function AboutUs() {
//   return (
//     <div>
//       {/* <User name={"Prachita (Function)"} location={"Goa"} /> */}
//       <UserClass name={"Prachita (Class)"} location={"Bengaluru"} />
//     </div>
//   );
// }

export default AboutUs;
