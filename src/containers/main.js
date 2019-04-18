import React, { Component } from 'react';
import MainComponent from '../components/main-component'

class Main extends Component {
  constructor (props) {
    super(props);
    this.state = {
      text: "Alright then"
    }
  }

  render = () => <MainComponent {...this.props} {...this.state}/>
}

export default Main;