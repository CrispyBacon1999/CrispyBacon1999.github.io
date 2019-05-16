var ghpages = require("gh-pages")

ghpages.publish(
  "public",
  {
    repo: "https://github.com/CrispyBacon1999/CrispyBacon1999.github.io.git",
    branch: "master",
  },
  err => {
    console.error(err)
  }
)
