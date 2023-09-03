import fetch from "node-fetch";
import React from "react";
// import {fetch} from "next/dist/compiled/@edge-runtime/primitives";
async function getData(id: string) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);

    return response.json();
}
type Props = {
    params: {
        id: string //Именно название папки!
    }
}

export default async function Post({params: {id}}: Props) {
    const post: any = await getData(id);
    return (
        <>
            <h1>{post.title}</h1>
            <h3>{post.body}</h3>
        </>
    )
}
