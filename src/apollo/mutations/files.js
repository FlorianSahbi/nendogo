import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";
import React from "react";

export const filesQuery = gql`
  {
    files
  }
`;

export default function Files() {
    const { error, data, loading } = useQuery(filesQuery);

    if (error) {
        return <div style={{color:"white"}}>{error.message}</div>
    }

    if (loading) {
        return <div>loading...</div>;
    }

    console.log(data)

    return (
        <div>
            {data.files.map(x => (
                <img
                    style={{ width: 200 }}
                    key={x}
                    src={`http://localhost:4000/images/${x}`}
                    alt={x}
                />
            ))}
        </div>
    );
};