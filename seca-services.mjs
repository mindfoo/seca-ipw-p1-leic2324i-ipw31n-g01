// Module that contains the functions that handle all HTTP APi requests

import * as eventsData from './seca-data-mem.mjs'


export async function getEvents() {
    return eventsData.getEvents()
}

export async function getEvent(eventId) {
    return eventsData.getEvent(eventId)
}

