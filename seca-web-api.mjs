// Module that contains the functions that handle all HTTP APi requests

import * as eventsServices from './seca-services.mjs'

// EVENTS

export async function getEvents(req, rsp) {
    const events = await eventsServices.getEvents()
    rsp.json(events)
}

export async function getEvent(req, rsp) {
    getEvent(req.params.id, rsp, event => rsp.json(event))
}


// GROUP

export async function createGroup(req, rsp) {
    try {
        let newGroup = await eventsServices.createGroup(req.body)
        rsp
            .status(201)
            .json({
                status: `Group with id ${newGroup.id} created with success`,
                newGroup: newGroup
                })
            
        } catch(e) {
            rsp
                .status(400)
                .json({error: `Error creating group: ${e}`})
        }
}

export async function getGroup(req, rsp) {
    getGroup(req.params.id, rsp, group => rsp.json(group))
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

