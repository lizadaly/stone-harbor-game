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
  var sections = [...Array(currentSection + 1).keys()].map((item, i) => {
    return <div key={item} aria-live="polite">{sections[item]}</div>
    })

  return (
    <div>
      <ReactCSSTransitionGroup transitionName="section" transitionAppear={true} transitionAppearTimeout={500} transitionEnterTimeout={500} transitionLeaveTimeout={300}>
        {sections}
      </ReactCSSTransitionGroup>
    </div>
  )
}
