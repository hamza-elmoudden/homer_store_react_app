import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';
import { ApolloLink } from '@apollo/client';
import createUploadLink from 'apollo-upload-client/createUploadLink.mjs';

const uploadLink = createUploadLink({ uri: 'http://localhost:3000/graphql' });
const httpLink = new HttpLink({ uri: 'http://localhost:3000/graphql' });
const cache = new InMemoryCache();

// const authLink = new ApolloLink((operation, forward) => {
//   // Retrieve the token from local storage or wherever you store it
//   const token = localStorage.getItem('authToken');
  
//   // Use the setContext method to add the authorization header to each request
//   operation.setContext({
//     headers: {
//       authorization: token ? `Bearer ${token}` : '',
//     }
//   });

//   return forward(operation);
// });

// apollo client setup
const client = new ApolloClient({
  cache,
  link: ApolloLink.from([uploadLink,httpLink])
});



export default client;
