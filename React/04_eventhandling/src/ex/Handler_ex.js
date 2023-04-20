import React from 'react';

class ClassComponent extends React.Component {
  constructor() {
    super();

    this.state = {
      text: 'Hello World!',
    };
  }

  render() {
    const { text } = this.state;

    return (
      <>
        <h1>{text}</h1>
        <button onClick={() => this.setState({text:'GoodBye World!'})}>클릭</button>
      </>
    );
  }
}

export default ClassComponent;
