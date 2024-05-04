
// -----------------
import { groq } from 'next-sanity';
import { client } from '../../../lib/sanity.client';
import AboutOneMAin from './AboutMian'
export const revalidate = 30;



const query = groq`
  *[_type=='aboutOne']{
    ...,
    
  } | order(_createdAt desc)
`;





const bannerquery = groq`
  *[_type=='Homebanner'] {
    ...,
    "video": video.asset->url,
   
  } | order(_createdAt desc)
`;



//partners


const partnersquery = groq`
  *[_type=='partners'] {
    ...
    
   
  } | order(_createdAt desc)
`;

const stepsquery = groq`
  *[_type=='aboutSteps'] {
    ...
    
   
  } | order(_createdAt desc)
`;


export const metadata = {
  icons: {
    icon: "/assets/img/sm-logo.svg",
  },
}
const AboutPage = async () => {
  const aboutOneData = await client.fetch(query);
  const partnersData = await client.fetch(partnersquery);
  const stepsData = await client.fetch(stepsquery);
 

console.log(aboutOneData[0])

  return (
    <>
    
    <AboutOneMAin
     aboutOneData={aboutOneData[0]}
     steps={stepsData}
     partners ={partnersData}
     />
  
    </>
  );
}

export default AboutPage;