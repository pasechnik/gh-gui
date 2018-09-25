import React from 'react'
import { Route, Switch } from 'react-router'

import About from './about'
import Github from './github'
import PageNotFound from './common/components/PageNotFound'

export default (
  <Switch>
    <Route exact path='/' component={Github} />
    <Route path='/about' component={About} />
    <Route path='*' component={PageNotFound} />
  </Switch>
)
