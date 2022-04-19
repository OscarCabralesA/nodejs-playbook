const { v4: uuidv4 } = require('uuid');

class PlayList {
    constructor(author, name, description) {
        this.author = author
        this.name = name
        this.description = description
        this.id = uuidv4()
        this.videos = []
    }

    addVideo(video_id) {
        this.videos.push(video_id)
    }

    removeVideo(video_id) {
        var vid = this.videos.indexOf(video_id)
        if (vid > -1) {
            this.videos = this.videos.splice(vid, 1)
        }
    }
}

module.exports.default = PlayList