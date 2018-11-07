workflow "DEPLOY_PRODUCTION" {
  on = "release"
  resolves = ["DO_THINGS", "DO_OTHER_THINGS"]
}

action "DO_THINGS" {
  uses = "docker://image1"
}

action "DO_OTHER_THINGS" {
  uses = "docker://image2"
}
