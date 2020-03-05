import React from "react";

class Heading extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "nitesh"
    };
    console.log("Parent Constructor");
    //  this.setState({ name: "Manoj" });
  }

  UNSAFE_componentWillMount() {
    console.log("Parent UNSAFE_componentWillMount ");
  }
  componentDidMount() {
    console.log("Parent componoentDidMount ");
  }

  /* UNSAFE_componentWillReceiveProps(nextProps) {
    console.log("Parent UNSAFE_componentWillReceiveProps ");
    if (nextProps.name !== this.props.name) {
      //Perform some operation
      this.setState({ name: "HARI" });
    }
  }*/

  /* static getDerivedStateFromProps(nextProps, prevState) {
    console.log("Parent getDerivedStateFromProps ");
    if (nextProps.name !== prevState.name) {
      return { name: nextProps.name };
    }
  } */

  shouldComponentUpdate(nextProps, nextState) {
    console.log("Parent shouldComponentUpdate ");
    return true;
  }
  UNSAFE_componentWillUpdate(newProps, newState) {
    console.log("Parent componentWillUpdate ");
  }

  componentDidUpdate(newProps, newState) {
    console.log("Parent componentDidUpdate ");
  }

  componentWillUnmount() {
    console.log("Parent componentWillUnmount ");
  }

  render() {
    console.log("Parent render ");
    return (
      <>
        <h1 style={{ color: "red" }}>
          HELLO HEading {this.props.name} name :{this.state.name}{" "}
        </h1>
        <CHILD name={this.props.name} />
        <button onClick={() => this.setState({ name: "Prateek" })}>
          CLICK ME{" "}
        </button>
      </>
    );
  }
}

class CHILD extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "nitesh"
    };
    console.log("CHILD Constructor");
    //  this.setState({ name: "Manoj" });
  }
  UNSAFE_componentWillMount() {
    console.log("CHILD UNSAFE_componentWillMount ");
  }
  componentDidMount() {
    console.log("CHILD componoentDidMount ");
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    console.log("CHILD UNSAFE_componentWillReceiveProps ");
    if (nextProps.name !== this.props.name) {
      //Perform some operation
    }
  }

  /* static getDerivedStateFromProps(nextProps, prevState) {
    console.log("CHILD getDerivedStateFromProps ");
    if (nextProps.name !== prevState.name) {
      return { name: nextProps.name };
    }
  } */

  shouldComponentUpdate(nextProps, nextState) {
    console.log("CHILD shouldComponentUpdate ");
    return true;
  }
  UNSAFE_componentWillUpdate(newProps, newState) {
    console.log("CHILD componentWillUpdate ");
  }

  componentDidUpdate(newProps, newState) {
    console.log("CHILD componentDidUpdate ");
  }

  componentWillUnmount() {
    console.log("CHILD componentWillUnmount ");
  }

  render() {
    console.log("CHILD render ");
    return <h1>Child {this.props.name} </h1>;
  }
}

export default Heading;
