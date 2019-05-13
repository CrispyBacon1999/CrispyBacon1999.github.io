import React, { Component } from "react"
import { NeutralColors } from "@uifabric/fluent-theme/lib/fluent/FluentColors"
import { Depths } from "@uifabric/fluent-theme/lib/fluent/FluentDepths"

export default class Card extends Component<{ headline: string }, {}> {
  render() {
    return (
      <div
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
      </div>
    )
  }
}
