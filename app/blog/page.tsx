import {Metadata} from "next";
import fetch from "node-fetch";
import Link from "next/link";
// import {fetch} from "next/dist/compiled/@edge-runtime/primitives";
async function getData() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
        next: {
            revalidate: 60
        }
    });

    if(!response.ok) throw new Error('Unable to t=fetch posts')

    return response.json();
}
export const metadata: Metadata = {
    title: 'Blog | Next App'
};

export default async function Blog() {
    const posts = await getData();
    // console.log()
    return (
        <>
            <h1>Blog page</h1>
            <ul>
                {posts.map((post: any) => (
                    <li key={post.id}><Link href={`/blog/${post.id}`}>{post.title}</Link></li>
                ))}
            </ul>
        </>
    )
}
