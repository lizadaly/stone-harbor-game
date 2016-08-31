export * from "./prologue.js"
export * from "./chapter1.js"
export * from "./chapter2.js"
export * from "./chapter3.js"
export * from "./chapter4.js"
export * from "./chapter5.js"
export * from "./chapter6.js"
export * from "./chapter7.js"

const React = require('react')
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
  return {
  }
}
export const RenderSection = connect(
  mapStateToProps
)(({currentSection, sections, inFlashback}) => (
  <div>{[...Array(currentSection + 1).keys()].map(i => {
    return <div key={i}>{sections[i]}</div>
  }
  )}
  </div>
))
