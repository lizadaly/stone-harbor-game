export * from "./prologue_PT_pt.js"
export * from "./chapter1_PT_pt.js"
export * from "./chapter2_PT_pt.js"
export * from "./chapter3_PT_pt.js"
export * from "./chapter4_PT_pt.js"
export * from "./chapter5_PT_pt.js"
export * from "./chapter6_PT_pt.js"
export * from "./chapter7_PT_pt.js"
export * from "./chapter8_PT_pt.js"
export * from "./epilogue_PT_pt.js"


import ReactCSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
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
