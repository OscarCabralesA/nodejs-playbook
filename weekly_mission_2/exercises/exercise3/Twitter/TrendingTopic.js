class TrendingTopic {
    constructor(hashtag, topic) {
        this.hashtag = hashtag
        this.topic = topic
        this.tweets = 0
    }

    addTweet() {
        this.tweets += 1
    }

    removeTweet() {
        this.tweets -= 1
    }
}

module.exports = TrendingTopic
