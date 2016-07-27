const React = require('react')
const ReactDOM = require('react-dom')
import { Provider, connect } from 'react-redux'
import { createStore } from 'redux'
import { gameApp } from './reducers'
import { Prologue, Chapter1, Chapter2, Chapter3 } from './chapters'
import { persistStore, autoRehydrate } from 'redux-persist'

const store = createStore(gameApp, undefined, autoRehydrate())
persistStore(store)
/*
let unsubscribe = store.subscribe(() =>
 console.log(store.getState())
)
*/

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
        {
          Array(this.props.currentChapter + 1).fill().map((_, i) => {
            return <chapter key={"chapter" + i}>{this.chapters[i]}</chapter>
          })
        }
      </div>
    }
}
const mapStateToProps = (state) => {
  return {
    currentChapter: state.bookmarks.length - 1,
  }
}

export const Game = connect(
  mapStateToProps
)(_Game)

$(document).ready(function () {
    ReactDOM.render(<Provider store={store}><Game/></Provider>, document.getElementById('article'))
});
