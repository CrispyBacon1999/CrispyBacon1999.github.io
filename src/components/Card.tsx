import React, { Component } from "react"
import { NeutralColors } from "@uifabric/fluent-theme/lib/fluent/FluentColors"
import posed from "react-pose"
import { MotionAnimations } from "@uifabric/fluent-theme/lib/fluent/FluentMotion"

import { Depths } from "../colors"
import { RefObject } from "@uifabric/utilities"

const CardAnim = posed.div({
  hidden: {
    opacity: 0,
    y: -20,
  },
  visible: {
    opacity: 1,
    y: 0,
    delayChildren: 350,
    staggerChildren: 100,
    transition: ({ delay }) => ({
      type: "spring",
      stiffness: 100,
      delay: delay,
    }),
  },
  lifted: {
    boxShadow: Depths.depth16,
    transition: {
      type: "spring",
    },
  },
  flat: {
    boxShadow: Depths.flat,
    transition: {
      type: "spring",
    },
  },
})

const CardChildAnim = posed.div({
  hidden: {
    opacity: 0,
    x: -20,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      ease: "easeInOut",
    },
  },
})

export default class Card extends Component<
  {
    headline: string
    index: number
    visible: boolean
    lifted: boolean
  },
  {}
> {
  render() {
    return (
      <CardAnim
        pose={[
          this.props.visible ? "visible" : "hidden",
          this.props.lifted ? "lifted" : "flat",
        ]}
        delay={this.props.index * 150 + 150}
        style={{
          backgroundColor: NeutralColors.white,
          width: 200,
          height: 200,

          padding: 10,
        }}
      >
        <CardChildAnim>
          <h2
            style={{
              fontSize: "2rem",
              fontFamily: "Lobster, cursive",
            }}
          >
            {this.props.headline}
          </h2>
        </CardChildAnim>
        <CardChildAnim>{this.props.children}</CardChildAnim>
      </CardAnim>
    )
  }
}
