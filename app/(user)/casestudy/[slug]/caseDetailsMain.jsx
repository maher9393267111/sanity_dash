"use client"
import MainLayout from "../../../../components/layout/MainLayout";
import useWow from "../../../../hooks/useWow";
import Link from "next/link";
import React from "react";
import urlFor from '../../../../lib/urlFor';
import { PortableText} from '@portabletext/react';
import { RichTextComponents } from '../../../../components/RichTextComponents';


const  CaseStudyDetails = ({casedata}) => {
  useWow()
  return (
    <MainLayout>
      <div
        className="case-study-details-page pt-120 mb-120"
        id="case-details-section"
      >
        <div className="container">
          <div className="row g-lg-4 gy-5 mb-80 ">
            <div className="col-lg-8">
              <div className="case-thumb">
                <img 
                src={urlFor(casedata.mainImage).url()} 
                
                alt="" />
              </div>
              <div className="case-details-content">
                <h3>{casedata?.title}</h3>
             

                <div className=' mt-24 mx-12'>
      <PortableText value={casedata?.body} components={RichTextComponents} />
      </div>


              </div>
            </div>


            {/* //sidebaark */}
            <div className="col-lg-4">
              <div className="case-sidebar">
                <div className="case-info-wrap mb-40">
                  <h4>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={18}
                      height={18}
                      viewBox="0 0 18 18"
                    >
                      <path d="M4.06197 17.9316C3.62773 18.1692 3.13498 17.7528 3.22273 17.2212L4.15647 11.5454L0.19311 7.51835C-0.177014 7.14156 0.0153601 6.45279 0.511484 6.37839L6.02172 5.54322L8.47871 0.350988C8.70034 -0.116996 9.29996 -0.116996 9.52158 0.350988L11.9786 5.54322L17.4888 6.37839C17.9849 6.45279 18.1773 7.14156 17.8061 7.51835L13.8438 11.5454L14.7776 17.2212C14.8653 17.7528 14.3726 18.1692 13.9383 17.9316L8.99846 15.2245L4.06197 17.9316Z" />
                    </svg>{" "}
                    Case Study Info
                  </h4>
                  <ul className="case-info">
                    <li>
                      <div className="icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={34}
                          height={23}
                          viewBox="0 0 34 23"
                          fill="none"
                        >
                          <path
                            d="M-4.5897e-07 11.5L33 11.5M33 11.5C28.6786 10.8824 20.1536 7.91765 20.625 1M33 11.5C28.4821 12.7353 19.6821 16.5647 20.625 22"
                            strokeWidth={2}
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <div className="content">
                        <span>Category:</span>
                        <h5>{casedata?.category?.title}</h5>
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={34}
                          height={23}
                          viewBox="0 0 34 23"
                          fill="none"
                        >
                          <path
                            d="M-4.5897e-07 11.5L33 11.5M33 11.5C28.6786 10.8824 20.1536 7.91765 20.625 1M33 11.5C28.4821 12.7353 19.6821 16.5647 20.625 22"
                            strokeWidth={2}
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <div className="content">
                        <span>Client:</span>
                        <h5>{casedata?.client}</h5>
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={34}
                          height={23}
                          viewBox="0 0 34 23"
                          fill="none"
                        >
                          <path
                            d="M-4.5897e-07 11.5L33 11.5M33 11.5C28.6786 10.8824 20.1536 7.91765 20.625 1M33 11.5C28.4821 12.7353 19.6821 16.5647 20.625 22"
                            strokeWidth={2}
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <div className="content">
                        <span>Location:</span>
                        <h5>{casedata?.location}</h5>
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={34}
                          height={23}
                          viewBox="0 0 34 23"
                          fill="none"
                        >
                          <path
                            d="M-4.5897e-07 11.5L33 11.5M33 11.5C28.6786 10.8824 20.1536 7.91765 20.625 1M33 11.5C28.4821 12.7353 19.6821 16.5647 20.625 22"
                            strokeWidth={2}
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <div className="content">
                        <span>Industry:</span>
                        <h5>{casedata?.industry}</h5>
                      </div>
                    </li>
                    <li>
                      <div className="icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={34}
                          height={23}
                          viewBox="0 0 34 23"
                          fill="none"
                        >
                          <path
                            d="M-4.5897e-07 11.5L33 11.5M33 11.5C28.6786 10.8824 20.1536 7.91765 20.625 1M33 11.5C28.4821 12.7353 19.6821 16.5647 20.625 22"
                            strokeWidth={2}
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <div className="content">
                        <span>Stack:</span>
                        <h5>{casedata?.stack}</h5>
                      </div>
                    </li>
                  </ul>
                </div>
                {/* <div className="social-share-area">
                  <h4>Social Share</h4>
                  <ul>
                    <li>
                      <a href="#">
                        <i className="bi bi-linkedin" />
                        <span>LinkedIn</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="bi bi-facebook" />
                        <span>Facebook</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="bi bi-twitter-x" />
                        <span>Twitter</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="bi bi-instagram" />
                        <span>Instagram</span>
                      </a>
                    </li>
                  </ul>
                </div> */}


              </div>
            </div>
          </div>


{/* --------------- */}


          {/* <div className="row">
            <div className="col-lg-12">
              <div className="details-navigation">
                <div className="single-navigation">
                  <div className="star-btn">
                    <a href="#">
                      <div className="bg">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={163}
                          height={80}
                          viewBox="0 0 163 80"
                        >
                          <path d="M2.83106 43.4757L2.50599 43.8556L2.83105 43.4757L2.51942 43.209C0.549281 41.5233 0.549281 38.4768 2.51942 36.791L2.83105 36.5243L2.50599 36.1444L2.83106 36.5243C4.3642 35.2125 4.87856 33.0628 4.10522 31.1991C3.34371 29.3639 4.18611 27.2563 6.00282 26.4516L10.271 24.5611C11.8256 23.8725 12.9744 22.5035 13.3826 20.8529L13.6874 19.621C14.0981 17.9605 15.4147 16.6764 17.085 16.3074L25.222 14.5098C26.2804 14.276 27.2461 13.7347 27.9978 12.9538L31.4198 9.3992C32.2068 8.58167 33.2736 8.09167 34.4066 8.02736L45.2063 7.41434C45.9803 7.37041 46.7363 7.16333 47.4247 6.80669L54.6193 3.07925C55.3877 2.68117 56.2545 2.51308 57.1159 2.59511L68.4067 3.67024C69.06 3.73244 69.719 3.67725 70.3528 3.50727L80.3343 0.830297C81.0979 0.625498 81.9021 0.625497 82.6657 0.830296L92.6472 3.50727C93.281 3.67725 93.94 3.73244 94.5933 3.67024L105.884 2.59511C106.746 2.51308 107.612 2.68117 108.381 3.07925L115.575 6.80669C116.264 7.16333 117.02 7.37041 117.794 7.41434L128.593 8.02736C129.726 8.09167 130.793 8.58167 131.58 9.39921L135.002 12.9538C135.754 13.7347 136.72 14.276 137.778 14.5098L145.915 16.3074C147.585 16.6764 148.902 17.9605 149.313 19.621L149.617 20.8529C150.026 22.5035 151.174 23.8725 152.729 24.5611L156.997 26.4516C158.814 27.2563 159.656 29.3639 158.895 31.1991C158.121 33.0628 158.636 35.2125 160.169 36.5243L160.481 36.791C162.451 38.4768 162.451 41.5232 160.481 43.209L160.169 43.4757C158.636 44.7875 158.121 46.9372 158.895 48.8009C159.656 50.6361 158.814 52.7437 156.997 53.5484L152.729 55.4389C151.174 56.1275 150.026 57.4965 149.617 59.1471L149.313 60.379C148.902 62.0395 147.585 63.3236 145.915 63.6926L137.778 65.4902C136.72 65.724 135.754 66.2654 135.002 67.0462L131.58 70.6008C130.793 71.4183 129.726 71.9083 128.593 71.9726L117.794 72.5857C117.02 72.6296 116.264 72.8367 115.575 73.1933L108.381 76.9208C107.612 77.3188 106.746 77.4869 105.884 77.4049L94.5933 76.3298C93.94 76.2676 93.281 76.3228 92.6472 76.4927L82.6657 79.1697C81.9021 79.3745 81.0979 79.3745 80.3343 79.1697L70.3528 76.4927C69.719 76.3228 69.06 76.2676 68.4067 76.3298L57.1159 77.4049C56.2545 77.4869 55.3876 77.3188 54.6193 76.9208L47.4247 73.1933C46.7363 72.8367 45.9803 72.6296 45.2063 72.5857L34.4066 71.9726C33.2736 71.9083 32.2068 71.4183 31.4198 70.6008L27.9978 67.0462C27.2461 66.2654 26.2804 65.724 25.222 65.4902L17.085 63.6926C15.4147 63.3236 14.0981 62.0395 13.6874 60.379L13.3826 59.1471C12.9744 57.4965 11.8256 56.1275 10.271 55.4389L6.00282 53.5484C4.18611 52.7437 3.34371 50.6361 4.10522 48.8009C4.87856 46.9372 4.3642 44.7875 2.83106 43.4757Z" />
                        </svg>
                      </div>
                      <div className="nav-btn">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={10}
                          height={10}
                          viewBox="0 0 10 10"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M1.51122 0.885308L10 9.37364L9.37364 10L0.885308 1.51122V7.38037H0V0H7.38037V0.885308H1.51122Z"
                          />
                        </svg>
                        <span>PRV PROJECT</span>
                      </div>
                    </a>
                  </div>
                  <div className="content">
                    <p>
                      The complete gu unlocking your team’s power of our unique
                      work.
                    </p>
                  </div>
                </div>
                <div className="single-navigation two text-end">
                  <div className="content">
                    <p>Challenges creating structure multiple brand system.</p>
                  </div>
                  <div className="star-btn">
                    <a href="#">
                      <div className="bg">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={163}
                          height={80}
                          viewBox="0 0 163 80"
                        >
                          <path d="M2.83106 43.4757L2.50599 43.8556L2.83105 43.4757L2.51942 43.209C0.549281 41.5233 0.549281 38.4768 2.51942 36.791L2.83105 36.5243L2.50599 36.1444L2.83106 36.5243C4.3642 35.2125 4.87856 33.0628 4.10522 31.1991C3.34371 29.3639 4.18611 27.2563 6.00282 26.4516L10.271 24.5611C11.8256 23.8725 12.9744 22.5035 13.3826 20.8529L13.6874 19.621C14.0981 17.9605 15.4147 16.6764 17.085 16.3074L25.222 14.5098C26.2804 14.276 27.2461 13.7347 27.9978 12.9538L31.4198 9.3992C32.2068 8.58167 33.2736 8.09167 34.4066 8.02736L45.2063 7.41434C45.9803 7.37041 46.7363 7.16333 47.4247 6.80669L54.6193 3.07925C55.3877 2.68117 56.2545 2.51308 57.1159 2.59511L68.4067 3.67024C69.06 3.73244 69.719 3.67725 70.3528 3.50727L80.3343 0.830297C81.0979 0.625498 81.9021 0.625497 82.6657 0.830296L92.6472 3.50727C93.281 3.67725 93.94 3.73244 94.5933 3.67024L105.884 2.59511C106.746 2.51308 107.612 2.68117 108.381 3.07925L115.575 6.80669C116.264 7.16333 117.02 7.37041 117.794 7.41434L128.593 8.02736C129.726 8.09167 130.793 8.58167 131.58 9.39921L135.002 12.9538C135.754 13.7347 136.72 14.276 137.778 14.5098L145.915 16.3074C147.585 16.6764 148.902 17.9605 149.313 19.621L149.617 20.8529C150.026 22.5035 151.174 23.8725 152.729 24.5611L156.997 26.4516C158.814 27.2563 159.656 29.3639 158.895 31.1991C158.121 33.0628 158.636 35.2125 160.169 36.5243L160.481 36.791C162.451 38.4768 162.451 41.5232 160.481 43.209L160.169 43.4757C158.636 44.7875 158.121 46.9372 158.895 48.8009C159.656 50.6361 158.814 52.7437 156.997 53.5484L152.729 55.4389C151.174 56.1275 150.026 57.4965 149.617 59.1471L149.313 60.379C148.902 62.0395 147.585 63.3236 145.915 63.6926L137.778 65.4902C136.72 65.724 135.754 66.2654 135.002 67.0462L131.58 70.6008C130.793 71.4183 129.726 71.9083 128.593 71.9726L117.794 72.5857C117.02 72.6296 116.264 72.8367 115.575 73.1933L108.381 76.9208C107.612 77.3188 106.746 77.4869 105.884 77.4049L94.5933 76.3298C93.94 76.2676 93.281 76.3228 92.6472 76.4927L82.6657 79.1697C81.9021 79.3745 81.0979 79.3745 80.3343 79.1697L70.3528 76.4927C69.719 76.3228 69.06 76.2676 68.4067 76.3298L57.1159 77.4049C56.2545 77.4869 55.3876 77.3188 54.6193 76.9208L47.4247 73.1933C46.7363 72.8367 45.9803 72.6296 45.2063 72.5857L34.4066 71.9726C33.2736 71.9083 32.2068 71.4183 31.4198 70.6008L27.9978 67.0462C27.2461 66.2654 26.2804 65.724 25.222 65.4902L17.085 63.6926C15.4147 63.3236 14.0981 62.0395 13.6874 60.379L13.3826 59.1471C12.9744 57.4965 11.8256 56.1275 10.271 55.4389L6.00282 53.5484C4.18611 52.7437 3.34371 50.6361 4.10522 48.8009C4.87856 46.9372 4.3642 44.7875 2.83106 43.4757Z" />
                        </svg>
                      </div>
                      <div className="nav-btn">
                        <span>NXT PROJECT</span>
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
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>

      {/* <div className="relatate-case-study-section mb-120">
        <div className="container">
          <div className="row mb-60">
            <div className="col-lg-12">
              <div className="section-title5">
                <span className="sub-title5 two">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={14}
                    height={14}
                    viewBox="0 0 14 14"
                  >
                    <path d="M3.7081 12.9544C3.41861 13.1128 3.09011 12.8352 3.14861 12.4808L3.7711 8.69694L1.12886 6.01223C0.882112 5.76104 1.01036 5.30186 1.34111 5.25226L5.0146 4.69548L6.6526 1.23399C6.80035 0.922003 7.2001 0.922003 7.34785 1.23399L8.98584 4.69548L12.6593 5.25226C12.9901 5.30186 13.1183 5.76104 12.8708 6.01223L10.2293 8.69694L10.8518 12.4808C10.9103 12.8352 10.5818 13.1128 10.2923 12.9544L6.9991 11.1497L3.7081 12.9544Z" />
                  </svg>
                  Case Study
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={14}
                    height={14}
                    viewBox="0 0 14 14"
                  >
                    <path d="M3.7081 12.9544C3.41861 13.1128 3.09011 12.8352 3.14861 12.4808L3.7711 8.69694L1.12886 6.01223C0.882112 5.76104 1.01036 5.30186 1.34111 5.25226L5.0146 4.69548L6.6526 1.23399C6.80035 0.922003 7.2001 0.922003 7.34785 1.23399L8.98584 4.69548L12.6593 5.25226C12.9901 5.30186 13.1183 5.76104 12.8708 6.01223L10.2293 8.69694L10.8518 12.4808C10.9103 12.8352 10.5818 13.1128 10.2923 12.9544L6.9991 11.1497L3.7081 12.9544Z" />
                  </svg>
                </span>
                <h2>
                  See More <span>Case Studies.</span>
                </h2>
              </div>
            </div>
          </div>
          <div className="row g-4">
            <div className="col-xl-4 col-md-6">
              <div className="case-study-card style-2">
                <div className="card-img">
                  <img src="/assets/img/innerpage/case-study-img1.jpg" alt="" />
                </div>
                <div className="card-content">
                  <Link href="/case-study">Startup Company</Link>
                  <h4>
                    <Link href="/case-study/case-study-details">
                      Navigating Growth A Startup Agency Success Story.
                    </Link>
                  </h4>
                  <p>
                    In this case study, we dissect the challenges faci the
                    strategies employed, and the remarkable oun achieved through
                    our collaborative efforts.
                  </p>
                  <Link
                    href="/case-study/case-study-details"
                    className="learn-more-btn"
                  >
                    Learn MORE
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={17}
                      height={9}
                      viewBox="0 0 17 9"
                    >
                      <path d="M12.1691 4.97333L0.234337 4.95394C0.172187 4.95394 0.112583 4.9041 0.0686358 4.81538C0.024689 4.72666 0 4.60634 0 4.48087C0 4.35541 0.024689 4.23509 0.0686358 4.14637C0.112583 4.05765 0.172187 4.00781 0.234337 4.00781L12.1694 4.02721C12.2315 4.02721 12.2911 4.07705 12.3351 4.16576C12.379 4.25448 12.4037 4.37481 12.4037 4.50027C12.4037 4.62573 12.379 4.74606 12.3351 4.83478C12.2911 4.92349 12.2313 4.97333 12.1691 4.97333Z" />
                      <path d="M16.9998 4.50591C14.3171 5.49934 10.9879 7.19858 8.9248 9L10.5521 4.50024L8.93094 0C10.9922 1.80378 14.3185 3.50681 16.9998 4.50591Z" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="case-study-card style-2">
                <div className="card-img">
                  <img src="/assets/img/innerpage/case-study-img2.jpg" alt="" />
                </div>
                <div className="card-content">
                  <Link href="/case-study">Design Agency</Link>
                  <h4>
                    <Link href="/case-study/case-study-details">
                      Customer Centric Strategies Acquiring Retaining.
                    </Link>
                  </h4>
                  <p>
                    This case study unveils the strategic roadmap, the
                    technology stack deployed, and the tangible benefits reaped
                    by Egenslab.
                  </p>
                  <Link
                    href="/case-study/case-study-details"
                    className="learn-more-btn"
                  >
                    Learn MORE
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={17}
                      height={9}
                      viewBox="0 0 17 9"
                    >
                      <path d="M12.1691 4.97333L0.234337 4.95394C0.172187 4.95394 0.112583 4.9041 0.0686358 4.81538C0.024689 4.72666 0 4.60634 0 4.48087C0 4.35541 0.024689 4.23509 0.0686358 4.14637C0.112583 4.05765 0.172187 4.00781 0.234337 4.00781L12.1694 4.02721C12.2315 4.02721 12.2911 4.07705 12.3351 4.16576C12.379 4.25448 12.4037 4.37481 12.4037 4.50027C12.4037 4.62573 12.379 4.74606 12.3351 4.83478C12.2911 4.92349 12.2313 4.97333 12.1691 4.97333Z" />
                      <path d="M16.9998 4.50591C14.3171 5.49934 10.9879 7.19858 8.9248 9L10.5521 4.50024L8.93094 0C10.9922 1.80378 14.3185 3.50681 16.9998 4.50591Z" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="case-study-card style-2">
                <div className="card-img">
                  <img src="/assets/img/innerpage/case-study-img3.jpg" alt="" />
                </div>
                <div className="card-content">
                  <Link href="/case-study">Digital Transformation</Link>
                  <h4>
                    <Link href="/case-study/case-study-details">
                      Tech Breakthroughs Solution Pioneering Digital Age.
                    </Link>
                  </h4>
                  <p>
                    In this case study, we dissect the challenges faci the
                    strategies employed, and the remarkable oun achieved through
                    our collaborative efforts.
                  </p>
                  <Link
                    href="/case-study/case-study-details"
                    className="learn-more-btn"
                  >
                    Learn MORE
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={17}
                      height={9}
                      viewBox="0 0 17 9"
                    >
                      <path d="M12.1691 4.97333L0.234337 4.95394C0.172187 4.95394 0.112583 4.9041 0.0686358 4.81538C0.024689 4.72666 0 4.60634 0 4.48087C0 4.35541 0.024689 4.23509 0.0686358 4.14637C0.112583 4.05765 0.172187 4.00781 0.234337 4.00781L12.1694 4.02721C12.2315 4.02721 12.2911 4.07705 12.3351 4.16576C12.379 4.25448 12.4037 4.37481 12.4037 4.50027C12.4037 4.62573 12.379 4.74606 12.3351 4.83478C12.2911 4.92349 12.2313 4.97333 12.1691 4.97333Z" />
                      <path d="M16.9998 4.50591C14.3171 5.49934 10.9879 7.19858 8.9248 9L10.5521 4.50024L8.93094 0C10.9922 1.80378 14.3185 3.50681 16.9998 4.50591Z" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </MainLayout>
  );
};

export default CaseStudyDetails;
