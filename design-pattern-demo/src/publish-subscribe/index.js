const Event = require('./event').Event;

const KEY = 'LOG';

Event.addEvent(KEY, (data) => console.log(`get ${data}`));
Event.addEvent(KEY, (data) => console.log('event fired'));

setTimeout(() => {
    Event.sendEvent(KEY, 'Hello');
}, 500);