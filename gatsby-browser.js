import React from "react";
import { silentAuth } from "./src/utils/auth";
export { wrapRootElement } from './src/apollo/wrap-root-element';

class SessionCheck extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: true,
    }
  }

  handleCheckSession = () => {
    this.setState({ loading: false })
  }

  componentDidMount() {
    localStorage.setItem("userId", "5deaede749628a0add61ba82");
    silentAuth(this.handleCheckSession)
  }

  render() {
    return (
      this.state.loading === false && (
        <React.Fragment>{this.props.children}</React.Fragment>
      )
    )
  }
}

// export const wrapRootElement = ({ element }) => {
//   return <SessionCheck>{element}</SessionCheck>
// }