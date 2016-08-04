import { combineReducers } from 'redux'
import { SHOW_NEXT_CHAPTER, SHOW_NEXT_SECTION, UPDATE_INVENTORY,
         SET_EXPANSIONS, UPDATE_STATE_COUNTER, SET_STATE_BOOLEAN } from "../actions"

function bookmarks(state=[0], action) {
  switch (action.type) {
    // Next chapter adds a new item to the array and sets its value to 0
    case SHOW_NEXT_CHAPTER:
      return [
        ...state,
        0
      ]
    case SHOW_NEXT_SECTION:
      let b = state.slice()
      b[b.length - 1] += 1
      return b
    default:
      return state
  }
}

function inventory(state={}, action) {
  switch (action.type) {
    case UPDATE_INVENTORY:
      return Object.assign({}, state, action.inventory)
    default:
      return state
  }
}

function expansions(state=[], action) {
  switch (action.type) {
    case SET_EXPANSIONS:
      return Object.assign({}, state, action.expansions)
    default:
      return state
  }
}

function counter(state=0, action) {
  switch (action.type) {
    case UPDATE_STATE_COUNTER:
      return state + 1
    default:
      return state
  }
}

function statePopped(state=false, action) {
  switch (action.type) {
    case SET_STATE_BOOLEAN:
      return action.statePopped
    default:
      return state
  }
}

export const gameApp = combineReducers({
  bookmarks,
  inventory,
  expansions,
  counter,
  statePopped
})
