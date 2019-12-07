import ApolloClient from 'apollo-boost';
import fetch from 'isomorphic-fetch';

export const client = new ApolloClient({
    // uri: "https://www.nendoroids.floriansahbi.com/graphql",
    uri: "http://localhost:3005/graphql",
    fetch
});