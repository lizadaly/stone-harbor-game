export * from "./prologue.js"
export * from "./chapter1.js"
export * from "./chapter2.js"
export * from "./chapter3.js"
export * from "./chapter4.js"
export * from "./chapter5.js"
export * from "./chapter6.js"
export * from "./chapter7.js"
export * from "./chapter8.js"
export * from "./epilogue.js"

const ReactCSSTransitionGroup = require('react-addons-css-transition-group')
const React = require('react')

export const RenderSection = ({currentSection, sections}) => {
  var sections = [...Array(currentSection + 1).keys()].map(i => {
    return <div key={i}>{sections[i]}</div>
      })

  return (
    <div>
      <ReactCSSTransitionGroup transitionName="section" transitionAppear={true} transitionEnterTimeout={500} transitionLeaveTimeout={300}>
        {sections}
      </ReactCSSTransitionGroup>
    </div>
  )
}
