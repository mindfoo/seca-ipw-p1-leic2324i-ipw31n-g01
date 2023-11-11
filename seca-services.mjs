// Module that contains the functions that handle all HTTP APi requests

import * as eventsFromMem from './seca-data-mem.mjs'
import * as eventsFromTM from './tm-events-data.mjs'


export async function getEvents(page, size) {
    console.log("events in mem", eventsFromMem.eventsInMem)

    if(eventsFromMem.eventsInMem.length) {
        return eventsFromMem.getEventsFromMem(page, size)
    } 
    
    const eventsExt = await eventsFromTM.getEventsFromTM(page, size)
    console.log("events from ext", eventsFromTM)

    const eventsMem = await eventsFromMem.setEventsInMem(eventsExt)
    console.log("events in mem 2", eventsMem)

    return eventsMem;
}

export async function getEvent(eventId) {
    return eventsFromMem.getEvent(eventId)
}

export async function createGroup(data) {
    console.log("ola", data)
    const groupsMem = await eventsFromMem.setGroupInMem(data)
    console.log("groups in mem 2", groupsMem, "oi", eventsFromMem.groupsInMem)

    return groupsMem
}




