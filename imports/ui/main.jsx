import { Meteor } from 'meteor/meteor'
import { App } from '/imports/ui/App'
import ReactDOM from 'react-dom/client'

Meteor.startup(() => {
  ReactDOM.createRoot(document.getElementById('react-target')).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  )
  ReactDOM.render(<App />, document.getElementById())
})
