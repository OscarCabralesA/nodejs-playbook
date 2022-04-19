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

    get numberOfRetweets() {
        return this.retweets.length
    }

    get numberOfQuoteTweets() {
        return this.quoteTweets.length
    }

    get numberOfComments() {
        return this.comments.length
    }

    get numberOfLikes() {
        return this.likes.length
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