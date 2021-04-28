import React, { Component } from 'react'
import './app.scss'
import { Content } from 'carbon-components-react'
import TutorialHeader from './components/TutorialHeader'
import { Route, Switch } from 'react-router-dom'
import Dashboard from './content/Dashboard'

class App extends Component {
  render() {
    return (
      <>
        <TutorialHeader />
        <Content>
          <Switch>
            <Route exact path="/" component={Dashboard} />
          </Switch>
        </Content>
      </>
    )
  }
}

export default App
