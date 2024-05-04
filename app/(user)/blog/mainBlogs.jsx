"use client"
import MainLayout from "../../../components/layout/MainLayout";
import useWow from "../../../hooks/useWow";
import Link from "next/link";
import urlFor from '../../../lib/urlFor';


const Blogpage = ({blogs}) => {
  useWow()
  return (
    <MainLayout>
        
      <div
        className="blog-grid-section scroll-margin pt-120 mb-120"
        id="blog-grid"
      >
        <div className="container">
          <div className="row g-4 mb-50">
          {blogs?.map((blog, index) => {
return (
            <div
            key={index}
              className="col-lg-4 col-md-6 wow animate fadeInDown"
              data-wow-delay="200ms"
              data-wow-duration="1500ms"
            >
              <div className="blog-card style-2">
                <div className="blog-card-img-wrap">
                  <Link href={`/blog/${blog?.slug.current}`} className="card-img">
                    <img   src={urlFor(blog.mainImage).url()}  alt="" />
                  </Link>
                  <Link href={`/blog/${blog?.slug.current}`} className="date">
                    <span>
                      <strong>15</strong> January
                    </span>
                  </Link>
                </div>
                <div className="card-content">
                  <div className="blog-meta">
                    <ul className="category">
                        
                      <li>
                        <Link href="/blog">
                            {blog?.categories?.length && blog?.categories[0]?.title}
                        </Link>
                     </li>
           
                    </ul>
                    <div className="blog-comment">
                      <span>Comment (20)</span>
                    </div>
                  </div>
                  <h4>
                    <Link  href={`/blog/${blog?.slug.current}`}>
                      Decoding the Cloud A Deep Dive into SaaS Trends.
                    </Link>
                  </h4>
                  <Link  href={`/blog/${blog?.slug.current}`} className="read-more-btn">
                    Read More
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={10}
                      height={10}
                      viewBox="0 0 10 10"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M8.48878 0.885308L0 9.37364L0.626356 10L9.11469 1.51122V7.38037H10V0H2.61963V0.885308H8.48878Z"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
)})}

         </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Blogpage;
