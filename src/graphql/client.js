import {ApolloClient, createHttpLink, InMemoryCache} from "@apollo/client";

const defaultOptions = {
	watchQuery: {
		fetchPolicy: "no-cache",
		errorPolicy: "ignore",
	},
	query: {
		fetchPolicy: "no-cache",
		errorPolicy: "all",
	},
};

const cache = new InMemoryCache({
	resultCaching: false,
});

const link = createHttpLink({
	uri: "https://anciently.net/graphql"
})

const client = new ApolloClient({
    link,
    cache,
    defaultOptions,
	fetchOptions: {
		mode: 'no-cors',
	  },
});

export default client;
