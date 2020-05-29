import React from 'react';
import { render } from 'react-dom';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hoc';
import { App } from './App';
import './GlobalStyles/main.scss'
const client = new ApolloClient({
    uri: 'http://localhost:4000/graphql'
});

const WrappedApp = (
    <ApolloProvider client={client}>
        <App />
    </ApolloProvider>
);

render(WrappedApp, document.getElementById('root'));