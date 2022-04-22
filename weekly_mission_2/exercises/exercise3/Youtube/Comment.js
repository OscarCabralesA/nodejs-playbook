class Comment {
    constructor(channelId, text) {
        this.channelId = channelId
        this.text = text
        this.date = new Date()
        this.likes = 0
        this.dislikes = 0
    }
    like() {
        this.likes += 1
    }
    dislike() {
        this.dislikes += 1
    }
}

module.exports = Comment