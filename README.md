# PlatoonTalk

PlatoonTalk creates a simple and secure application for dissemenating Organization updates, personnel information, and commonly used resources when other methods are not suitable. PlatoonTalk Provides a simple to use bulletin board system for alerting organization members of new information by SMS. PlatoonTalk also stores member data for quick viewing in continually changing team environments. Files can be hosted for centralized easy access to support organizational demands.

# Prototype-Installation
1. Clone the repo to local desktop.
2. run npx prisma generate
3. In root directory run docker-compose build
4. Run docker-compose up
5. Run npx prisma migrate dev
6. Check http://localhost:4310/api to see that the backend is running
7. Check http://localhost:4201 to see the front-end is running


# Prototype-Getting Started
1.  Navigate to http://localhost:5556. Here in prisma schema you can add data to your models.
2.  using postman make Postman GET request to https:localhost:4310/api/products "Currently Broken"
3.  using postman make a Postman GET request to https:localhost:4310/api/roster " Currently Broken"

**NOTE** GET request were previously working but are now broken with 500 internal database issues.

# Use Cases

1. As a **manager/admin**, I want to **make a post** so I can **update the organization**.
2. As a **manager/admin**, I want to **edit rosters** so I can **maintain personnel assingments**.
3. As a **admin**, I want to **upload files** so I can **provide new materials**.
4. As a **user**, I want to **register** so I can **use PlatoonTalk**.
5. As a **user**, I want to **navigate to a specific roster view** so I can **view a specific roster query**.
6. As a **user**, I want to **navigate to a specific post view** so I can **view a specific post query**.
7. As a **user**, I want to **downlaod a document** so I can **use document**.
8. As a **manager**, I want to **edit a post** so I can **correct mistakes**.
9. As a **admin**, I want to **remove files** so I can **remove old files**.
10. As a **manager**, I want to **send SMS on posts** so I can **give direct notification of information updates**.

# Mis-use Cases

1. As a **malicious user**, I want to **url sql inject** so I can **manipulate the database**.
   - Mitigations: Parameterize Input, Sanitize Input, Simple Error messaging, Remove database privileges from users.
2. As a **malicious user**, I want to **url sql inject** so I can **gather information on users**.
   - Mitigations: Parameterize Input, Sanitize Input, Simple Error messaging, Remove database privileges from users.
3. As a **malicious user**, I want to **escalate privileges** so I can **upload malicious files**.
   - Mitigations: Implement least privlege, proper authentication and authorization (KeyCloak),logging and monitoring of accounts
4. As a **malicious user**, I want to **escalate privileges** so I can **alter rosters**.
   - Mitigations: Implement least privlege, proper authentication and authorization (KeyCloak),logging and monitoring of accounts
5. As a **malicious user**, I want to **escalate privileges** so I can **use admin features**.
   - Mitigations: Implement least privlege, proper authentication and authorization (KeyCloak),logging and monitoring of accounts
6. As a **malicious user**, I want to **escalate privleges** so I can **have manager features**.
   - Mitigations: Implement least privlege, proper authentication and authorization (KeyCloak),logging and monitoring of accounts
7. As a **malicious user**, I want to **crossite script** so I can **embed malicious content**.
   - Mitigations: Filter input, Encode data outputs, user proper headers, enforce CSP, Whitelisting characters
8. As a **malicious user**, I want to **crossite script** so I can **gather user information**.
   - Mitigations: Filter input, Encode data outputs, user proper headers, enforce CSP, Whitelisting characters
9. As a **malicious user**, I want to **bypass login** so I can **view PlatoonTalk without an account**.
   - Mitigations: Enforce secure routing, Enforce proper authentication and authorization (KeyCloak).
10. As a **malicious user**, I want to **attack API endpoints** so I can **manipulate the PlatoonTalk System**.
    - Mitigations: Enforce proper authentication and authorization, use api keys where possible, use TLS, avoid fetching database records in middleware.

# C4 Models

Attached below is a link to an interactive view of current C4 Modeling of System, Container, Component views. User advice is to make sure the tags view is on (Bottom of the page). This provides color key and highlighting of technologies used for each system, container, component and connections.
https://s.icepanel.io/AZcBfSNRmyLMNx/CtWw

Another viewing option is to view the PDF file version with descriptions titled "PlatoonTalk C4 Diagrams.pdf" stored in the file Supporting Information Folder.

# Mockups

PlatoonTalk Mockups can be viewed by looking in the Supporting Information folder and selecting "PlatoonTalkMocks.pdf"

# License

MIT License

Copyright (c) Joshua Hutfless 2022

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
