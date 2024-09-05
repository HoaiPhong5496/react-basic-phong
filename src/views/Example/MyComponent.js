import React from "react";

class MyComponent extends React.Component {
  //key:value
  state = {
    name: "Phong",
    channel: "Hoi Dan IT",
  };

  /*
    JSX => return block fragment
    */

  handleOnChangeName = (event) => {
    this.setState({
      name: event.target.value,
    });
  };

  render() {
    return (
      <>
        <div className="first">
          <input
            value={this.state.name}
            type="text"
            onChange={(event) => this.handleOnChangeName(event)}
          />
          My name is {this.state.name}
        </div>
        <div className="seccond">
          My Youtube channel: {this.state["channel"]}
        </div>
      </>
    );
  }
}

export default MyComponent;
