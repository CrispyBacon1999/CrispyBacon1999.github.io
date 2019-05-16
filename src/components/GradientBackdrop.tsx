import posed from "react-pose"
import { Colors, Depths } from "../colors"
export const GradientBackdrop = posed.div({
  loaded: {
    background: `linear-gradient(to top, ${Colors.themePrimary}, ${
      Colors.themeTertiary
    })`,
    height: "400px",
    transition: {
      type: "spring",
      stiffness: 50,
    },
  },
  loading: {
    background: `linear-gradient(to top, ${Colors.themePrimary}, ${
      Colors.themePrimary
    })`,
    height: "100vh",
    transition: {
      type: "spring",
      stiffness: 50,
    },
  },
  flat: {
    boxShadow: "0 0 0 0 rgba(0, 0, 0, 0.132), 0 0 0 0 rgba(0, 0, 0, 0.108)",
    transition: {
      type: "spring",
      delay: 100,
    },
  },
  lifted: {
    boxShadow: Depths.depth8,
    transition: {
      type: "spring",
      delay: 100,
    },
  },
})
