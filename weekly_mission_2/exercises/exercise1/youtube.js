const video = {
    id: "H7fjqfSU0bY",
    video: "call_me_in_yout_summer.mp4", 
    title: "SHE IS SUMMER「CALL ME IN YOUR SUMMER」", 
    uploadDate: Date(Date.parse("Jul 25, 2018")),
    channel_id: "UC9_JZbqYadsNWEiHFBJ1MiQ",
    description: "",
    views: 26951, 
    likes: 1523, 
    dislikes: 251, 
    comments: [
        {
            channel_id: "UCBEBU1LPmgzWpWYDh_z1k4A", 
            date: new Date(),
            text: "Me: Why do you recommend me this?\nYoutube: Cuz your music taste is good.", 
            likes: 6030, 
            dislikes: 0, 
            like: function () {
                this.likes += 1
            },
            dislike: function () {
                this.dislikes += 1
            }
        }
    ],
    reply: function (comment) {
        this.comments.push(comment)
    },
    like: function () {
        this.likes += 1
    },
    dislike: function () {
        this.dislikes -= 1
    }
}

const playList = {
    id: "PLrfCBN9KyoO994830kkHuVwDDpnOhevrh", 
    author: "UC9_JZbqYadsNWEiHFBJ1MiQ", // channel_id
    name: "MUSIC VIDEO",
    description: "",
    videos: ["T_GnQN5qrlQ", "3gTSaYNEo9U", "CuRhIWuo0kI"], 
    addVideo: function (video_id) {
        this.videos.push(video_id)
    }, 
    removeVideo: function name(video_id) {
        var vid = this.videos.indexOf(video_id)
        if (vid > -1) {
            this.videos = this.videos.splice(vid, 1)
        }
    }
}

const about = {
    channel: "UC9_JZbqYadsNWEiHFBJ1MiQ",
    description: "MICOソロプロジェクト SHE IS SUMMER OFFICIAL YouTube チャンネルです。", 
    bio: "リアルなガールズマインドを歌う、'MICO'のソロピロジェクト'SHE IS SUMMER'。2016年 1st E.P「LOVELY FRUSTRATION E.P.」でデビュー。 ", 
    details: {
        location: "Japan"
    }, 
    links: ["http://she-is-summer.com/", "https://lineblog.me/micozukin/", "https://twitter.com/mico_sis", "https://www.instagram.com/mico_sis/"]
}

const channel = {
    id: "UC9_JZbqYadsNWEiHFBJ1MiQ", 
    name: "SHE IS SUMMER OFFICIAL CHANNEL", 
    about: "MICOソロプロジェクト SHE IS SUMMER OFFICIAL YouTube チャンネルです。",
    subscribers: 107000, 
    subscriptions: ["UC-CgSAOqv-6KC6Y9LYFR7Vg", "UC1kllfJB_Ig99rW4kd7sBjg"],
    videos: ["H7fjqfSU0bY", "T_GnQN5qrlQ", "EMoGQ7ix-kU"], 
    playLists: ["PLrfCBN9KyoO994830kkHuVwDDpnOhevrh", "PLrfCBN9KyoO-ZZ_jH4F1sHbvaTy-3VDn7"], 
    about: {
        channel: "UC9_JZbqYadsNWEiHFBJ1MiQ",
        description: "MICOソロプロジェクト SHE IS SUMMER OFFICIAL YouTube チャンネルです。", 
        bio: "リアルなガールズマインドを歌う、'MICO'のソロピロジェクト'SHE IS SUMMER'。2016年 1st E.P「LOVELY FRUSTRATION E.P.」でデビュー。 ", 
        details: {
            location: "Japan"
        }, 
        links: ["http://she-is-summer.com/", "https://lineblog.me/micozukin/", "https://twitter.com/mico_sis", "https://www.instagram.com/mico_sis/"]
    }, 
    uploadVideo: function (video) {
        this.videos.push(video)
    },
    deleteVideo: function (video_id) {
        var vid = this.videos.indexOf(video_id)
        if (vid > -1) {
            this.videos.splice(vid, 1)
        }
    }, 
    addPlaylist: function (playList) {
        this.playLists.push(playList)
    }, 
    deletePlaylist: function (playList) {
        var plst = this.playLists.indexOf(playList)
        if (plst > -1) {
            this.playLists = this.playLists.splice(plst, 1)
        }
    }
}