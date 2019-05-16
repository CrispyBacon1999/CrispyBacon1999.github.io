import React, { Component } from "react"
import { Depths } from "../colors"
import posed from "react-pose"

const AnimCard = posed.div({
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      type: "spring",
    },
  },
  lifted: {
    boxShadow: Depths.depth8,
  },
  flat: {
    boxShadow: Depths.flat,
  },
})

export default class InstallationCard extends Component<
  { visible: boolean; lifted: boolean },
  {}
> {
  render() {
    return (
      <AnimCard
        pose={[
          this.props.visible ? "visible" : "hidden",
          this.props.lifted ? "lifted" : "flat",
        ]}
        style={{
          boxShadow: Depths.depth8,
          paddingBottom: 20,
          width: 500,
        }}
      >
        <h2
          style={{
            fontFamily: "Lobster, cursive",
            fontSize: "2rem",
          }}
        >
          Installation
        </h2>
        <span
          style={{
            fontFamily: "Ubuntu Mono, monospace",
            fontSize: "1.2rem",
          }}
        >
          pip install vyper-bot
        </span>
      </AnimCard>
    )
  }
}
