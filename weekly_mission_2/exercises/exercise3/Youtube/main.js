const Channel = require('./Channel')
const About = require('./About')
const Playlist = require('./Playlist')
const Video = require('./Video')
const Comment = require('./Comment')

console.log("-Youtube Model-")

console.log("Channel and About")
const channel = new Channel("martinLp", "")
const about = new About(channel.id, "this is my channel *-*", "bio", {Location:"Mexico"}, {twitter:"twitter.com"})
channel.addSubscriber()
channel.about = about
console.log(channel)

console.log("Video and Comment")
const video = new Video("FirstVideo.mp4", "First Video", channel.id, "This is my first video ;)")
video.like()
const comment = new Comment(channel.id, "hellowo")
video.reply(comment)
comment.dislike()
console.log(video)

console.log("Playlist")
const playList = new Playlist(channel.id, "Favs", "these are my favs")
playList.addVideo(video)
console.log(playList)
