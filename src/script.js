const React = require('react')
const ReactDOM = require('react-dom')
import { Provider, connect } from 'react-redux'
import { createStore, compose } from 'redux'
import { gameApp } from './reducers'
import { Prologue, Chapter1, Chapter2, Chapter3,
         Chapter4, Chapter5, Chapter6, Chapter7,
         Chapter8, Epilogue } from './chapters'
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
        <Chapter3 chapterId="3"/>,
        <Chapter4 chapterId="4"/>,
        <Chapter5 chapterId="5"/>,
        <Chapter6 chapterId="6"/>,
        <Chapter7 chapterId="7"/>,
        <Chapter8 chapterId="8"/>,
        <Epilogue chapterId="9"/>
      ]
    }
    render() {
      // Return all chapters up to the currentChapter
      return <div>
        <Counter/>
        {
          Array(this.props.currentChapter + 1).fill().map((_, i) => {
            return <div key={"chapter" + i} className={i === this.props.currentChapter ? 'current-chapter' : ''}>{this.chapters[i]}</div>
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


const startGame = () => {
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
    /*
    let unsubscribe = store.subscribe(() =>
      console.log(store.getState())
    )*/
    ReactDOM.render(<Provider store={store}><Game/></Provider>, document.getElementById('article'))
}


if (document.readyState != 'loading') {
  startGame()
  var mode = localStorage.getItem("nightMode")
  document.getElementById('body').classList.toggle('nightmode', mode === 'true')
}
else {
  document.addEventListener('DOMContentLoaded', startGame)
}
