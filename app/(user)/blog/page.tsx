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
const HomePage = async () => {
  const blogs = await client.fetch(query);
  console.log(blogs)

  return (
    <>
      <MainBlogs blogs={blogs} />
    </>
  );
};

export default HomePage;
