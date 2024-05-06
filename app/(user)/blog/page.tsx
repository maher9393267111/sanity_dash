"use client";

import React, { useState, useEffect, useMemo } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { groq } from "next-sanity";
import { client } from "../../../lib/sanity.client";
import MainBlogs from './mainBlogs'
import { off } from "process";
export default function page() {
  const searchParams = useSearchParams();
  const cat = searchParams.get("category");
  const tag = searchParams.get("tag");

  const [posts, setPosts] = useState([]);
  const [cats, setCats] = useState([]);
  const [tags, setTags] = useState([]);
  const [newposts, setNewPosts] = useState([]);

  const nepostsquery = groq`
  *[_type=='post'] {
    ...,
    author->,
    categories[]->
  } | order(_createdAt desc) [0...3]
`;

const catsquery =
groq`*[_type == "category"] {
  ...,
  "count": count(*[_type == "post" && references(^._id)])
} | order(count desc) [0...5]`;

const tagsquery =

groq`
  *[_type=='tag'] {
    ...,

  } | order(_createdAt desc)
`;

const [offset, setOffset] = useState(0);
const [loading, setLoading] = useState(false);











  // const getPosts = async () => {
  //   const productFilter = `_type == "post"`;
  //   const categoryFilter = cat ? `&& "${cat}" in categories[]->title ` : "";
  //   const tagFilter = tag ? `&& "${tag}" in tags[]->title ` : "";
  //   const filter = `*[${productFilter}${categoryFilter}${tagFilter} ]`;

  //   const blogs = await client.fetch(groq`${filter} {
  //   ...
  //   } | order(_createdAt desc) [$offset...$offset + 1]`);

  //   setPosts([...posts, ...blogs]);
  //   setOffset(offset + 5);
  //   setLoading(false);
  //  // setPosts(blogs);
  //   console.log(blogs);
  // };

  const getPosts = async () => {
    const productFilter = `_type == "post"`;
    const categoryFilter = cat ? `&& "${cat}" in categories[]->title ` : "";
    const tagFilter = tag ? `&& "${tag}" in tags[]->title ` : "";
    const filter = `*[${productFilter}${categoryFilter}${tagFilter} ]`;
  
    const blogs = await client.fetch(groq`${filter} {
    ...
    } | order(_createdAt desc) [${offset}...${offset + 2}]`);
  
    setPosts([...posts, ...blogs]);
    setOffset(offset + 2);
    setLoading(false);
    // setPosts(blogs);
    console.log(blogs);
  };


  const getTags=async()=>{
    const tagsData = await client.fetch(tagsquery);
    setTags(tagsData)

  }


  const getCats=async()=>{
    const catsData = await client.fetch(catsquery);
    setCats(catsData)

  }


  const getNewPosts=async()=>{
    const newData = await client.fetch(nepostsquery);
    setNewPosts(newData)
    console.log(newposts)

  }

  useEffect(() => {
    getPosts();
    getCats();
    getTags();
    getNewPosts()

  }, [cat, tag]);

  return <div>
     <MainBlogs  newpostsData={newposts} tagsData={tags} catsData={cats} blogs={posts}
     
     loadMore={getPosts}
     />
  </div>;
}

//  "use client"
//  import React, { useState, useEffect, useMemo } from "react";

//  import { groq } from "next-sanity";
// import { client } from "../../../lib/sanity.client";
// import MainBlogs from "./mainBlogs";

//   export const revalidate = 5;

// const query = groq`
//   *[_type=='post'] {
//     ...,
//     author->,
//     categories[]->
//   } | order(_createdAt desc)
// `;

// const nepostsquery = groq`
//   *[_type=='post'] {
//     ...,
//     author->,
//     categories[]->
//   } | order(_createdAt desc) [0...3]
// `;

// const catsquery =
// groq`*[_type == "category"] {
//   ...,
//   "count": count(*[_type == "post" && references(^._id)])
// } | order(count desc) [0...5]`;

// const tagsquery =

// groq`
//   *[_type=='tag'] {
//     ...,

//   } | order(_createdAt desc)
// `;

// export const metadata = {
//   icons: {
//     icon: "/assets/img/sm-logo.svg",
//   },
// };

// interface Props {
//   searchParams:{

//     category?:string
//     tag?: any
//   }
// }

// const Blogs = async (
//   {searchParams}:Props

// ) => {
//   const { category ,tag} = searchParams

//   const productFilter = `_type == "post"`
//   const categoryFilter = category ? `&& "${category}" in categories[]->title ` :""
//   const tagFilter = tag ? `&& "${tag}" in tags[]->title ` :""
//   const filter = `*[${productFilter}${categoryFilter}${tagFilter}]`

//   const blogs = await client.fetch(groq`${filter} {
//   ...
//   }| order(_createdAt desc)`); ;

//   const newpostsData = await client.fetch(nepostsquery);
//   const catsData = await client.fetch(catsquery);
//   const tagsData = await client.fetch(tagsquery);

//   console.log("SSSAAAAAAASSSSSS",catsData , searchParams)

//   return (
//     <>
// asas
//   {/* <MainBlogs params={searchParams} newpostsData={newpostsData} tagsData={tagsData} catsData={catsData} blogs={blogs}/> */}
//     </>
//   );
// };

// export default Blogs;
