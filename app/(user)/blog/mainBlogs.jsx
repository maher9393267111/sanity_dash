"use client"
import MainLayout from "../../../components/layout/MainLayout";
import useWow from "../../../hooks/useWow";
import Link from "next/link";
import urlFor from '../../../lib/urlFor';


const Blogpage = ({blogs ,catsData ,tagsData}) => {
  useWow()
  return (
    <MainLayout>
        
      <div
        className="blog-grid-section scroll-margin pt-120 mb-120"
        id="blog-grid"
      >
        <div className="container">
          <div className="row g-lg-4 gy-5">




<div className="col-lg-8">

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

{/* Sidebar */}
<div
              className="col-lg-4 wow animate fadeInRight"
              data-wow-delay="400ms"
              data-wow-duration="1500ms"
            >
              <div className="sidebar-area">
                <div className="single-widget mb-30">
                  <h5 className="widget-title">Search Here</h5>
                  <form>
                    <div className="search-box">
                      <input type="text" placeholder="Search Here" />
                      <button type="submit">
                        <i className="bx bx-search" />
                      </button>
                    </div>
                  </form>
                </div>
                <div className="single-widget mb-30">
                  <h5 className="widget-title">Category</h5>
                  <ul className="category-list">
                  {catsData?.map((cat, index) => {
                    return (
                    <li
                    key={index}
                    >
                      <Link href={`/blog?category=${cat?.title}`}>
                        <span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={13}
                            height={14}
                            viewBox="0 0 13 14"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M11.0354 1.65188L0 12.6867L0.814262 13.501L11.8491 2.46556V10.0955H13V0.500977H3.40552V1.65188H11.0354Z"
                            />
                          </svg>
                          {cat?.title}
                        </span>
                        <span>(20)</span>
                      </Link>
                    </li>

                    )})}

             
                  </ul>
                </div>


                <div className="single-widget mb-30">
                  <h5 className="widget-title">New Tags</h5>
                  <ul className="tag-list">
                  {tagsData?.map((tag, index) => {
                    return (
                    <li key={index}>
                      <Link 
                      href={`/blog?tag=${tag?.title}`}
                      >

                        {tag?.title}
                      </Link>
                    </li>
                 
                    )})}
          
                  </ul>
                </div>


                <div className="single-widget mb-30">
                  <h5 className="widget-title">Popular Post </h5>
                  <div className="recent-post-widget mb-20">
                    <div className="recent-post-img">
                      <Link href="/blog/blog-details">
                        <img
                          src="/assets/img/innerpage/popular-post-img1.png"
                          alt=""
                        />
                      </Link>
                    </div>
                    <div className="recent-post-content">
                      <Link href="/blog">20 January, 2024</Link>
                      <h6>
                        <Link href="/blog/blog-details">
                          Looking Inspiration Traveling The World.
                        </Link>
                      </h6>
                    </div>
                  </div>
                  <div className="recent-post-widget mb-20">
                    <div className="recent-post-img">
                      <Link href="/blog/blog-details">
                        <img
                          src="/assets/img/innerpage/popular-post-img2.png"
                          alt=""
                        />
                      </Link>
                    </div>
                    <div className="recent-post-content">
                      <Link href="/blog">12 January, 2024</Link>
                      <h6>
                        <Link href="/blog/blog-details">
                          Challenges creating a multi-brand system.
                        </Link>
                      </h6>
                    </div>
                  </div>
                  <div className="recent-post-widget mb-20">
                    <div className="recent-post-img">
                      <Link href="/blog/blog-details">
                        <img
                          src="/assets/img/innerpage/popular-post-img3.png"
                          alt=""
                        />
                      </Link>
                    </div>
                    <div className="recent-post-content">
                      <Link href="/blog">04 January, 2024</Link>
                      <h6>
                        <Link href="/blog/blog-details">
                          Decoding the Cloud And Deep Dive Creative.
                        </Link>
                      </h6>
                    </div>
                  </div>
                </div>

              

                {/* <div className="single-widget">
                  <h5 className="widget-title">Social Share</h5>
                  <ul className="social-list">
                    <li>
                      <a href="https://www.linkedin.com/">
                        <i className="bi bi-linkedin" />
                        <span>LinkedIn</span>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.facebook.com/">
                        <i className="bi bi-facebook" />
                        <span>Facebook</span>
                      </a>
                    </li>
                    <li>
                      <a href="https://twitter.com/">
                        <i className="bi bi-twitter-x" />
                        <span>Twitter</span>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.instagram.com/">
                        <i className="bi bi-instagram" />
                        <span>Instagram</span>
                      </a>
                    </li>
                  </ul>
                </div> */}
              </div>
            </div>

         </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Blogpage;
