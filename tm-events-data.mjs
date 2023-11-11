

const url = 'https://app.ticketmaster.com';
export async function getEventsFromTM(page, size) {
    // fazer autenticação de user aqui?
    try{
        // {{URL}}/discovery/v2/events.json&?size=1&sort=relevance,desc&page=1&apikey={{API_KEY}}
        const response = await fetch(`${url}/discovery/v2/events.json?page=${page}&size=${size}&sort=relevance,desc&apikey=${process.env.API_KEY}`);
        const data = await response.json();
        return data._embedded.events;
    } catch (err) {
        console.log(err);
    }
   
}
