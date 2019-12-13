import React, { useState, useEffect } from "react"
import { ApolloProvider } from 'react-apollo';
import { client } from './client';

import { checkSession } from '../utils/auth';

const SessionCheck = ({ children }) => {
    const [loading, stillLoading] = useState(true);
    useEffect(() => checkSession(() => stillLoading(false)));
    return loading === false && <>{children}</>
};

export const wrapRootElement = ({ element }) => (
    <SessionCheck>
        <ApolloProvider client={client}>
            {element}
        </ApolloProvider>
    </SessionCheck>
)
