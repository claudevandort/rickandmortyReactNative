import React, { Component } from 'react';
import { Header, ThemeProvider } from 'react-native-elements';
import { appName } from '../app.json'
import Episodes from './episodes/Episodes'
import API from './api'
import { addEpisodes } from './store/actions'
import { connect } from 'react-redux'

class App extends Component{
  async componentDidMount(){
    const episodes = await API.getEpisodes()
    this.props.addEpisodes(episodes.results)
  }
  render(){
    return (
      <ThemeProvider>
        <Header centerComponent={{ text: appName, style: {color: '#fff', fontSize: 18}}} />
        <Episodes />
      </ThemeProvider>
    )
  }
}

const mapDispatchToProps = {
    addEpisodes
}

export default connect(null, mapDispatchToProps)(App)
