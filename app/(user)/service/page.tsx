import { groq } from "next-sanity";
import { client } from "../../../lib/sanity.client";
import MainService from "./mainServices";

export const revalidate = 30;

const query = groq`
  *[_type=='service'] {
    ...,
   
  } | order(_createdAt desc)
`;

export const metadata = {
  icons: {
    icon: "/assets/img/sm-logo.svg",
  },
};
const Services = async () => {
  const services = await client.fetch(query);
  console.log(services)

  return (
    <>
      <MainService services={services} />
    </>
  );
};

export default Services;
