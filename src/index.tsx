import React from 'react';
import * as ReactDOM from 'react-dom';
import ApolloClient from 'apollo-boost';
import ApolloProvider from './ApolloProvider'

//import { ApolloProvider } from '@apollo/react-hooks';




ReactDOM.render(

    <ApolloProvider  />,
  document.getElementById('root')
);

