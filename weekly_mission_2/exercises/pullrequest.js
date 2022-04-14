const pullRequest = {
    title: "Bug arreglado", 
    author: "oscarc",
    branchName: "main", 
    dateCreated: new Date(), 
    status: "OPEN", 
    repositoryNameAssociated: "MissionNodeJS",
    getStatus: function() {
        return this.status
    },
    getTitleAndAuthor: function() {
        return `Title: ${this.title}, Author: ${this.author}`
    }, 
}

console.log("--Pull Request--")
console.log(pullRequest)
console.log("\nStatus: " + pullRequest.getStatus())
console.log("\nTítulo y autor: " + pullRequest.getTitleAndAuthor())