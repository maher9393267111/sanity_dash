import { groq } from "next-sanity";
import { client } from "../../../lib/sanity.client";
 import MainCases from "./mainComp";

export const revalidate = 30;

const query = groq`
  *[_type=='casestudy'] {
    ...,
    
    category->
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




const CasePage = async ({searchParams} : Props) => {




  const cases = await client.fetch(query);
  console.log(cases)
//?category=development




  return (
    <>
      <MainCases cases={cases} />
    </>
  );
};

export default CasePage;
