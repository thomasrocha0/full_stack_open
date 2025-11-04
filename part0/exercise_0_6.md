```mermaid
sequenceDiagram
    participant browser
    participant server

    Note right of browser: browser adds note to DOM

    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
    activate server
    server-->>browser: 201 created
    deactivate server
```