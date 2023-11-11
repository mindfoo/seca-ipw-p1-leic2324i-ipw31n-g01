// Module manages application events data.
// In this specific module, data is stored in memory

import * as dotenv from 'dotenv';
dotenv.config();

export let eventsInMem = [];

export let groupsInMem = [];

let nextId = groupsInMem.length+1


// EVENTS

export async function setEventsInMem(data) {
    console.log("this is data", data)
    eventsInMem = data
    .map((_, idx) => { 
        return {
            name: _.name,
            date: _.dates.start.dateTime,
            segment: 'wtf',
            genre: 'where is this',
            userId: idx % 2 
        } 
    })
    return eventsInMem;
}

export async function getEvent(userId, eventId) {
    return getEventDetails(userId, eventId, event => event)
}

export async function deleteEventFromGroup(userId, eventId, groupId) {
    return deleteEvent(
        userId, 
        eventId, 
        (event, eventIdx) => { 
            events.splice(eventIdx, 1)
            return event
        })
}


// GROUPS

export async function setGroupInMem(data) {
    console.log("adeus", data)
    const group = {
        id: nextId++,
        name: data.n,
        description: data.d,
        events: []
    }

    groupsInMem.push(group)
    return group
}
