 import { groq } from "next-sanity";
import { client } from "../../../lib/sanity.client";
import MainBlogs from "./mainBlogs";

 export const revalidate = 30;

const query = groq`
  *[_type=='post'] {
    ...,
    author->,
    categories[]->
  } | order(_createdAt desc)
`;



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




export const metadata = {
  icons: {
    icon: "/assets/img/sm-logo.svg",
  },
};
interface Props { 
  searchParams:{
   
    category?:string
    tag?: any
  }
}

const Blogs = async ({searchParams}:Props) => {
  const { category ,tag} = searchParams


  const productFilter = `_type == "post"`
  const categoryFilter = category ? `&& "${category}" in categories[]->title ` :""
  const tagFilter = tag ? `&& "${tag}" in tags[]->title ` :""
  const filter = `*[${productFilter}${categoryFilter}${tagFilter}]`

  const blogs = await client.fetch(groq`${filter} {
  ...
  }| order(_createdAt desc)`); ;

  const newpostsData = await client.fetch(nepostsquery);
  const catsData = await client.fetch(catsquery);
  const tagsData = await client.fetch(tagsquery);


  console.log(catsData)

  return (
    <>
  <MainBlogs newpostsData={newpostsData} tagsData={tagsData} catsData={catsData} blogs={blogs}/>
    </>
  );
};

export default Blogs;




// import { groq } from "next-sanity";
// import { client } from "../../../lib/sanity.client";
// import MainBlogs from "./mainBlogs";

//  export const revalidate = 30;

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




// export default async function BlogsPagess({searchParams} : Props) {
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


//   console.log(catsData)
// //?category=development




//   return (
//     <>
//       <MainBlogs newpostsData={newpostsData} tagsData={tagsData} catsData={catsData} blogs={blogs} />
//     </>
//   );
// };

