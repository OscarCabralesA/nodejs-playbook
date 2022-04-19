class PullRequest {
    constructor(title, author, branchName, repositoryNameAssociated) {
        this.title = title
        this.author = author
        this.branchName = branchName
        this.repositoryNameAssociated = repositoryNameAssociated
        this.dateCreated = new Date()
        this.status = "OPEN"
    }

    get getStatus() {
        return this.status
    }

    getTitleAndAuthor() {
        return `Title: ${this.title}, Author: ${this.author}`
    }
}

const pullRequest = new PullRequest("Bug fixed", "oscarc", "main", "MissionNodeJS")
console.log("--Pull Request--")
console.log(pullRequest)
console.log("\nStatus: " + pullRequest.getStatus)
console.log("\nTítulo y autor: " + pullRequest.getTitleAndAuthor())