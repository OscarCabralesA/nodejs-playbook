class Issue {
    constructor(title, repositoryNameAssociated, labels, author) {
        this.title = title
        this.repositoryNameAssociated = repositoryNameAssociated
        this.labels = labels
        this.author = author
        this.status = "OPEN"
        this.NumberOfComments = 0
        this.dateCreated = new Date()
        this.lastUpdated = this.dateCreated
    }

    getTitleAndAuthor() {
        return `Title: ${this.title}, Author: ${this.author}`
    }
    
    getGeneralInfo() {
        return `This issue ${this.title} was created by ${this.author}`
    }

}

const issue = new Issue("LIVE 3 Semana 2", "MissionNodeJS", ["FINALIZADO", "LIVE 3", "Semana-2"], "carlogilmar")
console.log("--Issue--")
console.log(issue)
console.log("\nTítulo y autor: " + issue.getTitleAndAuthor())
console.log("\nInformación general: " + issue.getGeneralInfo())