import Home1About from "../../components/about/Home1About";
import Home1Approach from "../../components/approachSection/Home1Approach";
import Home1Banner from "../../components/banner/Home1Banner";
import Home1Blog from "../../components/blog/Home1Blog";
import BannerWithCaseStudySlider from "../../components/caseStudy/BannerWithCaseStudySlider";
import Home1Contact from "../../components/contact/Home1Contact";
import Footer from "../../components/footer/Footer";
import Header1 from "../../components/header/Header1";
import Home1BannerMarquee from "../../components/marquee/Home1BannerMarquee";
import LogoMarquee from "../../components/marquee/LogoMarquee";
import Home1Portfolio from "../../components/portfolio/Home1Portfolio";
import Home1Solution from "../../components/solution/Home1Solution";
import Home1Testimonial from "../../components/testimonial/Home1Testimonial";
import Home1WorkProcess from "../../components/workProcess/Home1WorkProcess";
// -----------------
import { groq } from 'next-sanity';
import { client } from '../../lib/sanity.client';

export const revalidate = 30;

const query = groq`
  *[_type=='post'] {
    ...,
    author->,
    categories[]->
  } | order(_createdAt desc)
`;





const bannerquery = groq`
  *[_type=='Homebanner'] {
    ...,
    "video": video.asset->url,
   
  } | order(_createdAt desc)
`;


const onequery = groq`
  *[_type=='homeone'] {
    ...
    
   
  } | order(_createdAt desc)
`;






export const metadata = {
  icons: {
    icon: "/assets/img/sm-logo.svg",
  },
}
const HomePage = async () => {
  const posts = await client.fetch(query);
  const homebannerData = await client.fetch(bannerquery);
  const sectionOneData = await client.fetch(onequery);

console.log(sectionOneData[0])

  return (
    <>
    
      <Header1 />
      <Home1Banner data={homebannerData[0]} />
      <Home1BannerMarquee />
      <Home1About data={sectionOneData[0]} />
      <Home1Solution />
      <Home1Portfolio />
      <Home1WorkProcess />
      <BannerWithCaseStudySlider />
      <Home1Approach />
      <LogoMarquee />
      <Home1Testimonial />
      <Home1Blog />
      <Home1Contact />
      <Footer />
    </>
  );
}

export default HomePage;