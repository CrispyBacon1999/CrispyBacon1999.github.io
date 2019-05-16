import React, { Component } from "react"
import posed from "react-pose"
import { RefObject } from "@uifabric/utilities"

export enum PlanePose {
  HIDDEN = "hidden",
  VISIBLE = "visible",
  START = "start",
  DESTINATION = "destination",
}

const grav = 1

const Plane = posed.div({
  hidden: {
    opacity: 0,
    transition: {
      duration: 300,
      ease: "easeInOut",
    },
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 150,
      ease: "easeInOut",
    },
  },
  start: {
    top: 140,
    left: 20,
    transform: "rotate(0deg)",
    transition: {
      type: "spring",
      stiffness: 100,
    },
  },
  destination: {
    left: window.innerWidth / 2 - 50,
    top: ["left", x => -x],
    transform: "rotate(90deg)",
    transition: {
      duration: 1000,
      ease: "easeInOut",
    },
  },
})

export class TelegramPlane extends Component<{ poses: Array<PlanePose> }, {}> {
  render() {
    return (
      <Plane
        pose={this.props.poses}
        cardHeight={100}
        style={{ position: "absolute" }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="100"
          height="100"
          viewBox="0 0 192 192"
          style={{ fill: "#000000" }}
        >
          <g
            fill="#ffffff"
            fill-rule="nonzero"
            stroke="none"
            stroke-width="1"
            stroke-linecap="butt"
            stroke-linejoin="miter"
            stroke-miterlimit="10"
            stroke-dasharray=""
            stroke-dashoffset="0"
            font-family="none"
            font-weight="none"
            font-size="none"
            text-anchor="none"
            style={{ mixBlendMode: "normal" }}
          >
            <path d="M0,192v-192h192v192z" fill="none" />
            <g fill="#000000">
              <g id="surface1">
                <path d="M183.92308,0c-0.98077,0.11538 -1.90384,0.43269 -2.76923,0.92308l-177.23077,96c-2.56731,1.41346 -4.03846,4.24039 -3.72115,7.15385c0.28846,2.91346 2.30769,5.36539 5.10577,6.23077l47.07692,14.07692c1.09616,8.71154 6,46.41346 6.92308,53.76923c0.92308,7.32693 5.88462,8.59616 10.84615,1.84615c3.34615,-4.55769 23.07692,-32.30769 23.07692,-32.30769l42,42c1.84615,1.84615 4.52884,2.56731 7.03846,1.90385c2.53846,-0.66346 4.5,-2.625 5.19231,-5.13462l44.30769,-177.23077c0.66346,-2.33654 0.08654,-4.84615 -1.47116,-6.69231c-1.58653,-1.84615 -3.95192,-2.79808 -6.375,-2.53846zM173.30769,21.69231l-37.15385,148.61538l-41.76923,-41.76923l60.69231,-84.23077l-94.38462,67.38462l-34.38462,-10.15385z" />
              </g>
            </g>
          </g>
        </svg>
      </Plane>
    )
  }
}
