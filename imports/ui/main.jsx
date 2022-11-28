import { Meteor } from 'meteor/meteor'
import { App } from '/imports/ui/App'
import { render } from 'react-dom'

Meteor.startup(() => {
  render(<App />, document.getElementById('react-target'))
})
