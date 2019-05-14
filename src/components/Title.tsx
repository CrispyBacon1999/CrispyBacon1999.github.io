import React, { Component } from "react"

import posed from "react-pose"

const TitleAnim = posed.div({
  hidden: {
    opacity: 0,
    x: -20,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: ({ delay }) => ({
      duration: 500,
      delay: delay,
      ease: "easeInOut",
    }),
  },
})

export default class Title extends Component<{ visible: boolean }, {}> {
  render() {
    return (
      <TitleAnim pose={this.props.visible ? "visible" : "hidden"} delay={0}>
        <h1
          style={{
            fontFamily: "Oleo Script Swash Caps",
            fontSize: "5rem",
            color: "white",
            textShadow:
              "0 6.4px 14.4px rgba(0, 0, 0, 0.132), 0 1.2px 3.6px rgba(0, 0, 0, 0.108)",
          }}
        >
          {this.props.children}
        </h1>
      </TitleAnim>
    )
  }
}
