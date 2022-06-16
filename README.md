# How to run:
```shell
yarn start-sever
yarn build & yarn start
```

# What's done :

- Display a list of all the conversations
- Allow the user to select a conversation
- Display a conversation and messages affected to it
- Create a message 
- Allow to remove a conversation if I'm the creator
- Create a new conversation based on user list (if a conversation don't already exist or me to me)
- You can normally access cta and other thanks to tab + keyboard
- Server side rendering for conversation, skeleton for the rest
- Server error management, 404 error management and client side error management.
- Unit tests

### API :

To make it work I'd to apply few changes to the API.
Because of custom routes on json-server http DELETE aren't working. To fix it fast I manage deletion
from the middleware.
Another issue was for conversation creation. Because of the middleware and the way you imported the db, it was
cached from memory so never up to date after a http GET that follow our http POST (create). To fix it I change the way you 
get database and the way it was filtered.

---

## Performance :

I used react-query to be sure to work with server fresh data and avoid to manage a local store.
Thanks to Next.js I prefetch some datas from server. For the less important datas I only fetch them on client side.
This look like a PWA, we can then have a partial first content, lower ttfb and we're able to avoid to deal with a big layout shift.

You can check all of it by disabling JS and/or activating network throttling.