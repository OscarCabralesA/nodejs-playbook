const issue = {
    title: "LIVE 3 Semana 2", 
    repositoryNameAssociated: "MissionNodeJS", 
    status: "OPEN", 
    NumberOfComments: 15, 
    labels: ["FINALIZADO", "LIVE 3", "Semana-2"], 
    author: "carlogilmar", 
    dateCreated: new Date(Date.parse("Apr 14, 2022")), 
    lastUpdated: new Date(),
    getTitleAndAuthor: function() {
        return `Title: ${this.title}, Author: ${this.author}`
    }, 
    getGeneralInfo: function() {
        return `This issue ${this.title} was created by ${this.author}`
    }, 
}

console.log("--Issue--")
console.log(issue)
console.log("\nTítulo y autor: " + issue.getTitleAndAuthor())
console.log("\nInformación general: " + issue.getGeneralInfo())