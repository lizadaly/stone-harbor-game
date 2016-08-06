const React = require('react')
const ReactDOM = require('react-dom')
import { Provider, connect } from 'react-redux'
import { createStore, compose } from 'redux'
import { gameApp } from './reducers'
import { Prologue, Chapter1, Chapter2, Chapter3 } from './chapters'
import { persistStore, autoRehydrate } from 'redux-persist'

import { Counter } from './components/counter'
import { setStateBoolean } from "./actions"

window.lockHistory = false  // GLOBAL to set the history for the browser as locked; unlocked on next tick

class _Game extends React.Component {
    constructor(props) {
      super(props)
      this.chapters = [
        <Prologue chapterId="0"/>,
        <Chapter1 chapterId="1"/>,
        <Chapter2 chapterId="2"/>,
        <Chapter3 chapterId="3"/>
      ]
    }
    render() {
      // Return all chapters up to the currentChapter
      return <div>
        <Counter/>
        {
          Array(this.props.currentChapter + 1).fill().map((_, i) => {
            return <chapter key={"chapter" + i}>{this.chapters[i]}</chapter>
          })
        }
      </div>
    }
}
_Game.contextTypes = {
  store: React.PropTypes.object.isRequired
};

const mapStateToProps = (state) => {
  return {
    currentChapter: state.bookmarks.length - 1
  }
}

export const Game = connect(
  mapStateToProps
)(_Game)

$(document).ready(function () {
//    var store = createStore(gameApp, undefined, autoRehydrate())
    var store = createStore(gameApp, undefined, compose(
      autoRehydrate(),
      window.devToolsExtension && window.devToolsExtension()
    ))
    var persister = persistStore(store)
    window.lockHistory = true
    window.addEventListener("popstate", function(e) {
      if (history.state) {
        // Use this state instead of reserializing
        if (history.state.counter != store.getState().counter) {
          console.log("reserializing state with counter ", history.state.counter)
          persister.rehydrate(history.state)
          history.replaceState(history.state, "")
          window.lockHistory = true
        }
      }
    })
    let unsubscribe = store.subscribe(() =>
      console.log(store.getState())
    )
    ReactDOM.render(<Provider store={store}><Game/></Provider>, document.getElementById('article'))
})
