// Module manages application events data.
// In this specific module, data is stored in memory

import * as dotenv from 'dotenv';
dotenv.config();
const NUM_EVENTS = 20
const url = 'https://app.ticketmaster.com';

let events = new Array(NUM_EVENTS).fill(0, 0, NUM_EVENTS)
    .map((_, idx) => { 
        return {
            id: idx,
            title: `Event ${idx}`,
            description: `Event ${idx} description`,
            userId: idx % 2 
        } 
    })

let nextId = NUM_EVENTS


export async function getEvents(userId, page=1, size=20) {
    // fazer autenticação de user aqui?
    try{
        // {{URL}}/discovery/v2/events.json&?size=1&sort=relevance,desc&page=1&apikey={{API_KEY}}
        const response = await fetch(`${url}/discovery/v2/events.json?page=${page}&size=${size}&sort=relevance,desc&apikey=${process.env.API_KEY}`);
        const data = await response.json();
        return data;
    } catch (err) {
        console.log(err);
    }
}

export async function getEvent(userId, eventId) {
    return findEventAndDoSomething(userId, eventId, event => event)
}

export async function deleteEventFromGroup(userId, eventId, groupId) {
    return findEventAndDoSomething(
        userId, 
        eventId, 
        (event, eventIdx) => { 
            events.splice(eventIdx, 1)
            return event
        })
}
