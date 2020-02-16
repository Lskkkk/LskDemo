const Event = {
    subscribers: {},
    addEvent: function (key, callback) {
        if (this.subscribers[key] === undefined) {
            this.subscribers[key] = [];
        }
        this.subscribers[key].push(callback);
    },
    sendEvent: function (key, data) {
        const cbs = this.subscribers[key];
        if (cbs && cbs.length > 0) {
            cbs.forEach(cb => cb(data));
        }
    },
    removeEvent: function (key) {
        this.subscribers[key] = [];
    }
};

exports.Event = Event;