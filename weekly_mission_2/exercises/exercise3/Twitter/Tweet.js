class Tweet {
    constructor (author, text, content) {
        this.author = author
        this.text = text
        this.content = content
        this.id = "00000"
        this.date = new Date()
        this.retweets = []
        this.quoteTweets = []
        this.comments = []
        this.likes = []
    }

    quoteTweet(tweet_id) {
        this.quoteTweets.push(tweet_id)
    }
    comment(tweet) {
        this.comment.push(tweet)
    }
    like(user_id) {
        this.likes.push(user_id)
    }
}