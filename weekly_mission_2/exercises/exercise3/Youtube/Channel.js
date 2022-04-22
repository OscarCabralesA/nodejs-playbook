const { v4:uuidv4 } = require('uuid')
class Channel {
    constructor(name, about) {
        this.id = uuidv4()
        this.name = name
        this.about = about
        this.subscribers = 0
        this.subscriptions = []
        this.videos = []
        this.playlists = []
        this.about = about
    }

    get numberOfSubscriptions() {
        return this.subscriptions.length
    }
    
    addSubscriber() {
        this.subscribers += 1
    }
    
    uploadVideo(video) {
        this.videos.push(video)
    }

    deleteVideo(video_id) {
        var vid = this.videos.indexOf(video_id)
        if (vid > -1) {
            this.videos = this.videos.splice(vid, 1)
        }
    }

    addPlaylist(playList) {
        this.playlists.push(playList)
    }

    deletePlaylist(playList) {
        var plst = this.playlists.indexOf(playList)
        if (plst > -1) {
            this.playlists = this.playlists.splice(plst, 1)
        }
    }
}

module.exports = Channel