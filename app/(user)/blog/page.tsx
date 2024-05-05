"use client"

import React, { useState, useEffect, useMemo } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { groq } from "next-sanity";
import { client } from "../../../lib/sanity.client";

export default function page() {
  const searchParams = useSearchParams();
  const cat = searchParams.get("category");
  const tag = searchParams.get("tag");

  const [posts, setPosts] = useState([]);
  const [cats, setCats] = useState([]);
  const [tags, setTags] = useState([]);
  const [newposts, setNewPosts] = useState([]);




const getPosts=async()=>{

     const productFilter = `_type == "post"`
    const categoryFilter = cat ? `&& "${cat}" in categories[]->title ` :""
    const tagFilter = tag ? `&& "${tag}" in tags[]->title ` :""
    const filter = `*[${productFilter}${categoryFilter}${tagFilter}]`
  
    const blogs = await client.fetch(groq`${filter} {
    ...
    }| order(_createdAt desc)`); ;

    setPosts(blogs)
    console.log(blogs)

}



useEffect(() => {
  getPosts();
}, [cat ,tag]);



  return (
    <div>
{posts?.length}


    </div>
  )
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

