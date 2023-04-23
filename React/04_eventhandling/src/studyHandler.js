import React from 'react';

class Handler extends React.Component {
  constructor() {
    super();
    //state 오브젝트
    this.state = {
      text: 'Feel',
    };
  }

  good = () => {
    // setState에 함수 넣어서 값 변경
    this.setState({ text: 'Good' });
  };

  render() {
    // 객체 구조 분해 할당
    const { text } = this.state;

    return (
      <>
        <h3>{text}</h3>
        <button onClick={this.good}>👍</button>
        <button onClick={() => this.setState({ text: 'Bad' })}>👎</button>
      </>
    );
  }
}

export default Handler;
