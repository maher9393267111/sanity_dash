// -----------------
import { groq } from "next-sanity";
import { client } from "../../../lib/sanity.client";
import FaqMAin from "./Main";
export const revalidate = 30;

const query = groq`
  *[_type=='faqs']{
    ...,
    
  } | order(_createdAt desc)
`;

export const metadata = {
  icons: {
    icon: "/assets/img/sm-logo.svg",
  },
};
const FaqsPage = async () => {
  const faqsData = await client.fetch(query);

  console.log(faqsData[0]);

  return (
    <>
      <FaqMAin data={faqsData[0]} />
    </>
  );
};

export default FaqsPage;
