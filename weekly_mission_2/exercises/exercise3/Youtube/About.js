class About {
    constructor(channelId, description, bio, details, links) {
        this.channelId = channelId
        this.description = description
        this.bio = bio
        this.details = details
        this.links = links
    }


    addLink(link) {
        this.links.push(link)
    }

    removeLink(link) {
        var lnk = this.links.indexOf(link)
        if (lnk > -1) {
            this.links = this.links.splice(lnk, 1)
        }
    }
}

module.exports.default = About