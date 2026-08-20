# Data layer

`catalog.js` is the development data source for the menu API. It is deliberately outside the frontend and backend application folders so it can be replaced by a database adapter without changing the client contract.

For production, replace this module with a repository backed by MongoDB/PostgreSQL and move images to licensed, managed storage.

