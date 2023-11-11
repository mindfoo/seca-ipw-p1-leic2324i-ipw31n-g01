// Module that contains the functions that handle all HTTP APi requests

import * as eventsServices from './seca-services.mjs'
import * as eventsMem from './seca-data-mem.mjs'

// EVENTS

export async function getEvents(req, rsp) {
    console.log("banana",req.query)
    let page = req.query.p;
    let size = req.query.s;
    const events = await eventsServices.getEvents(page, size)
    return rsp.json(events)
}

export function getEventsFromMem(req, rsp) {
    return rsp.json(eventsMem.eventsInMem)
}

export async function getEvent(req, rsp) {
    return getEvent(req.params.id, rsp, event => rsp.json(event))
}


// GROUP

export async function createGroup(req, rsp) {
    console.log("req", req.body)
    try {
        let newGroup = await eventsServices.createGroup(req.body)
        rsp.status(201)
        .json({
            status: `Group with id ${newGroup.id} created with success`,
            newGroup: newGroup
        })
            
        } catch(e) {
            rsp.status(400)
            .json({error: `Error creating group: ${e}`})
        }
}

export async function getGroups(req, rsp) {
    return rsp.json(eventsMem.groupsInMem)
}

export async function getGroup(req, rsp) {
    console.log("eheh", eventsMem.groupsInMem)
    const group = eventsMem.groupsInMem.filter(el => req.params.id == el.id )
    return rsp.json(group)
}

export async function deleteGroup(req, rsp) {
    const groupId = req.params.id
    const deleted = await eventsServices.deleteGroup(groupId)
    if(deleted) {
        rsp.json({status: `Group with id ${groupId} deleted with success`})
    } else {
        rsp.status(404).json({error: `Group with id ${groupId} not found`})
    }
}

export async function deleteEventFromGroup(req, rsp) {
    const groupId = req.params.groupId
    const eventId = req.params.id
    const deleted = await eventsServices.deleteEventFromGroup(userId, groupId, eventId)
    
    if(deleted) {
        rsp.json({status: `Event with id ${eventId} deleted with success from group ${groupId}`})
    } else {
        rsp.status(404).json({error: `Error doing this...`})
    }
}

// USER
export async function createUser(req, rsp) {
    try {
        let newUser = await eventsServices.newUser(req.body)
        rsp
            .status(201)
            .json({
                status: `User with id ${newUser.id} created with success`,
                newUser: newUser
                })
            
        } catch(e) {
            rsp
                .status(400)
                .json({error: `Error creating user: ${e}`})
        }
}

