import * as React from "react";

import PageInterface from "../PageInstence";

class App extends React.Component<PageInterface> {
  state = {
    color: "fff"
  };

  render() {
    return (
      <div>
        <h1>Welcome to React swith Typescript</h1>
        <button className="square">fff</button>
        <p
          onClick={e => {
            this.setState({ color: "bla bla" });
          }}
        >
          The color of this page is: {this.state.color}
        </p>
      </div>
    );
  }
}

export default App;
