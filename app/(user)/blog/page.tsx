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




const HomePage = async ({searchParams} : Props) => {
  const { category ,tag} = searchParams


  const productFilter = `_type == "post"`
  const categoryFilter = category ? `&& "${category}" in categories[]->title ` :""
  const tagFilter = tag ? `&& "${tag}" in tags[]->title ` :""
  const filter = `*[${productFilter}${categoryFilter}${tagFilter}]`

  const blogs = await client.fetch(groq`${filter} {
  ...
  }| order(_createdAt desc)`); ;
  console.log(blogs)
//?category=development




  return (
    <>
      <MainBlogs blogs={blogs} />
    </>
  );
};

export default HomePage;
