# # React Blogging App + React-Bootstrap + MongoDB + Flux-architecture  

A minimal example of using a React frontend  **Blogging App** with a [Node backend](https://github.com/UmidjonOkhunov/blogs_backend).


* 🕺 [Demo](#user-content-demo)
* 📐 [Design Points](#user-content-design-points)
* ✔️ [Functionalities](#user-content-functionalities)
* 💻 [Local Development](#user-content-local-development)


## Demo

[Demo deployment](https://frozen-dusk-56361.herokuapp.com): example API call from the React UI is [fetched with a relative URL](build/src/App.js#L16) that is served by an Express handler in the Node server.

## Design Points

This is a fronend UI of a combo of two npm projects, the backend server and the frontend UI. So for the backend server of this project go to [blogs_backend](https://github.com/UmidjonOkhunov/blogs_backend)

     
-  [**React UI**] is generated by [create-react-app](https://github.com/facebookincubator/create-react-app).
- We used [React router-library](https://github.com/ReactTraining/react-router) for managing navigation in a React-application.
- [React Bootstrap](https://react-bootstrap.github.io/) is used for styling the application.
- Redux (using Flux architecture) was used for state management.

### Flux-architecture

Facebook developed the [Flux](https://facebook.github.io/flux/docs/in-depth-overview/) - architecture to make state management easier. In Flux, the state is separated completely from the React-components into its own stores. State in the store is not changed directly, but with different actions.
Facebook has an implementation for Flux, but we will be using the [Redux](https://redux.js.org/) - library. It works with the same principle, but is a bit simpler. Facebook also uses Redux now instead of their original Flux.



## Functionalities

1.  User Registration using backend
2.  CRUD Operations like

- User can add/delete a blog.
- User can put a like to any blog.
- User can see all blogs and other users.



## Local Development



### Run the [API server]

Make sure to clone the [blogs_backend](https://github.com/UmidjonOkhunov/blogs_backend) and go to its directory

In a terminal:

```bash
# Initial setup
npm install

# Start the server
npm start
```

#### Install new npm packages for Node

```bash
npm install package-name --save
```


### Run the [React UI](https://github.com/UmidjonOkhunov/blogs_frontend)

The React app is configured to proxy backend requests to the local Node server. (See [`"proxy"` config](build/package.json))

In a separate terminal from the API server, start the UI:

```bash
# Initial setup
npm install

# Start the server
npm start
```

#### Install new npm packages for React UI

```bash
npm install package-name --save
```




