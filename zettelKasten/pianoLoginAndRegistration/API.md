# Piano API

Piano ID enpoints should be configured to UTC.
2 Environments for Piano API
* Sandbox - Simplified, transactions are virtual, emails are not sent but can be viewed.
* Production - Live transactions will be processed, emails sent.

Base URL's
...production environment API are:
https://api.piano.io/api/v3
https://api-au.piano.io/api/v3 (Australia)
https://api-ap.piano.io/api/v3 (Asia-Pacific)
https://api-eu.piano.io/api/v3 (Europe)

...sandbox environment API is:
https://sandbox.piano.io/api/v3

All endpoints are capable of handling both GET and POST requests. We do this because business-driven APIs have methods that don’t map cleanly to the standard POST, GET, PUT, and DELETE HTTP methods. The Piano API has methods such as disable, activate, deactivate, renew, extend, check, count, and so on. Choosing which API method should map to which HTTP method seems arbitrary.

All calls return a 200 Ok even if there's an error.
On success a code: '0' response is returned.

All calls require a secure connection.