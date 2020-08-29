
  export default function calendarData() {

  var googleApi = window.gapi
  var CLIENT_ID = '868775755554-k1qgqgs7q0p590pt8n6o2g9gmt2obnlf.apps.googleusercontent.com';
  var API_KEY = 'AIzaSyDNWCxifKowshB55MSOTuVPvnUFUiLNqG4';
  var DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"];
  var SCOPES = "https://www.googleapis.com/auth/calendar.events";

    googleApi.load('client:auth2', () => {

    googleApi.client.init({
      apiKey: API_KEY,
      clientId: CLIENT_ID,
      discoveryDocs: DISCOVERY_DOCS,
      scope: SCOPES
  })      
  
  googleApi.client.load('calendar', 'v3')

  googleApi.auth2.getAuthInstance().signIn()
  .then(() => {
    var event = {
      'summary': 'Google I/O 2015',
      'location': '800 Howard St., San Francisco, CA 94103',
      'description': 'A chance to hear more about Google\'s developer products.',
      'start': {
        'dateTime': '2015-05-28T09:00:00-07:00',
        'timeZone': 'America/Los_Angeles'
      },
      'end': {
        'dateTime': '2015-05-28T17:00:00-07:00',
        'timeZone': 'America/Los_Angeles'
      },
      'recurrence': [
        'RRULE:FREQ=DAILY;COUNT=2'
      ],
      'attendees': [
        {'email': 'lpage@example.com'},
        {'email': 'sbrin@example.com'}
      ],
      'reminders': {
        'useDefault': false,
        'overrides': [
          {'method': 'email', 'minutes': 24 * 60},
          {'method': 'popup', 'minutes': 10}
        ]
      }
    }

    var request = googleApi.client.calendar.events.insert({
      'calendarId': 'primary',
      'resource': event
    })
    
    request.execute(event => {
      window.open(event.htmlLink)
     })
    })
   })
 }

  

 

