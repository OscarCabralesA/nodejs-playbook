class Repo {
    constructor (name, author) {
        this.name = name
        this.author = author
        this.languages = []
        this.numberOfCommits = 0
        this.stars = 0
        this.forks = 0
        this.issuesOpen = 0
        this.issuesClosed = 0
    }

    get totalIssues() {
        return this.issuesClosed + this.issuesOpen
    }

    get generalInfo() {
        return `This repository ${this.name} was created by ${this.author}`
    }
}

const repo = new Repo("LaunchX", "carlogilmar")
repo.languages.push("Javascript")
repo.numberOfCommits += 1
repo.stars = 199
repo.forks = 200
repo.issuesOpen = 5
repo.issuesClosed = 2

console.log("--Repo--")
console.log(repo)
console.log("Nombre del repo:" + repo.name)
console.log("Issues totales: " + repo.totalIssues)
console.log(repo.generalInfo)