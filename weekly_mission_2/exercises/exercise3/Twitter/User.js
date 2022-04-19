class User {
    constructor (user, username, bio) {
        this.user = user
        this.username = username
        this.bio = bio
        this.followers = []
        this.following = []
        this.tweets = []
        this.media = []
        this.likes = []
    }

    get numberOfFollowers() {
        return this.followers.length
    }

    get numberOfFollowing() {
        return this.following.length
    }

    get numberOfTweets() {
        return this.tweets.length
    }

    addFollower(user_id) {
        if (!this.followers.includes(user_id)) {
            this.followers.push(user_id)
        }
    }
    addFollowing(user_id) {
        if (!this.following.includes(user_id)) {
            this.following.push(user_id)
        }
    }
    removeFollower(user_id) {
        var fllwr = this.followers.indexOf(user_id)
        if (fllwr > -1) {
            this.followers = this.followers.splice(fllwr, 1)
        }
    }
    removeFollowing(user_id) {
        var fllwg = this.following.indexOf(user_id)
        if (fllwg > -1) {
            this.following = this.following.splice(fllwg, 1)
        }
    }
    tweet(tweet) {
        this.tweets.push(tweet)
    }
}

module.exports.default = User
