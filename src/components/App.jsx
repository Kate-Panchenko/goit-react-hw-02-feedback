import { GlobalStyle } from "./GlobalStyle";
import { Layout } from "./Layout";
import { Feedback } from "./Feedback/Feedback";
import { Component } from "react";

export class App extends Component {

  render() {
    return (
    <Layout>
      <GlobalStyle />
      <Feedback/>
    </Layout>
  );
  }
}
