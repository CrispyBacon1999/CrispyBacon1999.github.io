import React, { Component } from "react"
import { NeutralColors } from "@uifabric/fluent-theme/lib/fluent/FluentColors"
import { Depths } from "@uifabric/fluent-theme/lib/fluent/FluentDepths"
import posed from "react-pose"

const CardAnim = posed.div({
  hidden: {
    opacity: 0,
    y: -20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: ({ delay }) => ({
      ease: "easeInOut",
      delay: delay,
    }),
  },
})

export default class Card extends Component<
  { headline: string; index: number; visible: boolean },
  {}
> {
  render() {
    return (
      <CardAnim
        pose={this.props.visible ? "visible" : "hidden"}
        delay={this.props.index * 150 + 150}
        style={{
          backgroundColor: NeutralColors.white,
          width: 200,
          height: 200,
          boxShadow: Depths.depth16,
          padding: 10,
        }}
      >
        <h2
          style={{
            fontSize: "2rem",
            fontFamily: "Lobster, cursive",
          }}
        >
          {this.props.headline}
        </h2>
        {this.props.children}
      </CardAnim>
    )
  }
}
