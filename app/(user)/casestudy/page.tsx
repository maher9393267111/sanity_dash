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



const contactquery = groq`
  *[_type=='contact'] {
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




const CasePage = async ({searchParams} : Props) => {




  const cases = await client.fetch(query);
  const contact = await client.fetch(contactquery);
  console.log(cases)
//?category=development




  return (
    <>
      <MainCases contact={contact[0]} cases={cases} />
    </>
  );
};

export default CasePage;
