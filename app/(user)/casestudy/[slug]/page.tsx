import { groq } from 'next-sanity';
import Image from 'next/image';
import { client } from '../../../../lib/sanity.client';

 
 import MainCaseDetails from './caseDetailsMain'

type Props = {
  params: {
    slug: string;
  };
};


  const query = groq`*[_type == "casestudy"][slug.current == $slug][0] {
  
      ...,      // all the fields
      category->,
      

  }`;

const CaseDetailPage  = async ({ params }: { params: { slug: string } }) => {
  const { slug } = params;

  const casedata = await client.fetch(query, { slug }) || [];

  return (
    <section
      id="section"
      className="py-24 sm:py-24 relative w-full justify-center flex items-center "
    >

    <MainCaseDetails casedata={casedata} />  

      {/* <div className=' mt-24 mx-12'>
      <PortableText value={post?.body} components={RichTextComponents} />
      </div> */}

    </section>
  );
};

export default CaseDetailPage;


