import { groq } from 'next-sanity';
import Image from 'next/image';
import { client } from '../../../../lib/sanity.client';
import urlFor from '../../../../lib/urlFor';
import { PortableText} from '@portabletext/react';
import { RichTextComponents } from '../../../../components/RichTextComponents';
 import { Post } from '../../../../typings';

type Props = {
  params: {
    slug: string;
  };
};


  const query = groq`*[_type == "post"][slug.current == $slug][0] {
  
      ...,      // all the fields
      author->, //author reference with {}
      categories[]-> // categories reference with []
  }`;

const BlogDetailPage = async ({ params }: { params: { slug: string } }) => {
  const { slug } = params;

  const post = await client.fetch(query, { slug }) || [];

  return (
    <section
      id="section"
      className="py-24 sm:py-24 relative w-full justify-center flex items-center "
    >
      {post?.title}

      <div className=' mt-24 mx-12'>
      <PortableText value={post?.body} components={RichTextComponents} />
      </div>

    </section>
  );
};

export default BlogDetailPage;






// import { groq } from 'next-sanity';
// import Image from 'next/image';
// import { client } from '../../../../lib/sanity.client';
// import urlFor from '../../../../lib/urlFor';
// import { PortableText} from '@portabletext/react';
// import { RichTextComponents } from '../../../../components/RichTextComponents';
//  import { Post } from '../../../../typings';

// type Props = {
//   params: {
//     slug: string;
//   };
// };




// export const revalidate = 30; // revalidate this page every 30 seconds


// // Static Site Generation
// export async function generateStaticParams(){
//   const query = groq`
//       *[_type == "post"]
//       {
//           slug
//       }
//   `;

//   const slugs: Post[] = await client.fetch(query);
//   const slugRoutes = slugs.map(slug => slug?.slug.current)

//   return slugRoutes?.map(slug => ({
//       slug
//   }))
// }







// const PostSingle = async ({ params: { slug } }: Props) => {
//   const Query = groq`
//     //all the post data and also slug field (on studio) matches
//     *[_type=='post' && slug.current == $slug][0]
//     {
//         ...,      // all the fields
//         author->, //author reference with {}
//         categories[]-> // categories reference with []
//     }
//     `;

//   const query = groq`*[_type == "post"][slug.current == $slug][0] {
  
//       ...,      // all the fields
//       author->, //author reference with {}
//       categories[]-> // categories reference with []
//   }`;




//     console.log("SLUG" ,slug)

//   // "Post" type ni "typings.d.ts"-d bga uchras automataar duudagdana.
//   const post = await client.fetch(query, { slug }) || [];


//   if (!post) {
//     return <div>Not found</div>
    
    
//   }




//   return (
//     <div>

// {post && (
    
//     <article className='px-10 pb-28'>

      



//     </article>

//               )}
//     </div>
//   );
// };

// export default PostSingle;