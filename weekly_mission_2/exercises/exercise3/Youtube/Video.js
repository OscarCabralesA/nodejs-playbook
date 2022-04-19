class Video {
    constructor(video, title, channelId, description) {
        this.video = video
        this.title = title
        this.channelId = channelId
        this.description = description
        this.id = "000000"
        this.channelId = channelId
        this.uploadDate = new Date()
        this.views = 0
        this.likes = 0
        this.dislikes = 0
        this.comments = []
    }

    reply(comment) {
        this.comments.push(comment)
    }
    like() {
        this.likes += 1
    }
    dislike() {
        this.dislikes += 1
    }
}