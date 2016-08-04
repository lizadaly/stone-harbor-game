export const SHOW_NEXT_SECTION = "SHOW_NEXT_SECTION"
export const SHOW_NEXT_CHAPTER = "SHOW_NEXT_CHAPTER"
export const UPDATE_INVENTORY = "UPDATE_INVENTORY"
export const SET_EXPANSIONS = "SET_EXPANSIONS"
export const UPDATE_STATE_COUNTER = "UPDATE_STATE_COUNTER"
export const SET_STATE_BOOLEAN = "SET_STATE_BOOLEAN"

// Show the next section of text
export const showNextSection = (section) => {
  return {
    type: SHOW_NEXT_SECTION,
    section
  }
}

// Show the next chapter
export const showNextChapter = (chapter) => {
  return {
    type: SHOW_NEXT_CHAPTER,
    chapter
  }
}

// Initialize the expansions set
export const setExpansions = (expansions) => {
  return {
    type: SET_EXPANSIONS,
    expansions
  }
}

// Update the user's inventory list
// Data is a mapping of key/values based on the user selection
export const updateInventory = (inventory) => {
  return {
    type: UPDATE_INVENTORY,
    inventory
  }
}
// Update the atomic counter for the current state change
export const updateStateCounter = (counter) => {
  return {
    type: UPDATE_STATE_COUNTER,
    counter
  }
}
// Flip the toggle to indicate that a browser history state was just popped
export const setStateBoolean = (statePopped) => {
  return {
    type: SET_STATE_BOOLEAN,
    statePopped
  }
}
