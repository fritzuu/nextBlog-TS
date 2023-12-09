"use client";

import Link from "next/link";

export default function Home() {


  return (
    <>
      <section className="relative z-10 overflow-hidden pt-[120px] pb-16 md:pt-[150px] md:pb-[120px] xl:pt-[180px] xl:pb-[160px] 2xl:pt-[210px] 2xl:pb-[200px]">
        <div className="container mt-20">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="mx-auto max-w-[800px] text-center">
                <h1 className="mb-5 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
                 RJR | BLOG
                </h1>
                <p className="mb-12 text-base font-medium !leading-relaxed text-body-color dark:text-white dark:opacity-90 sm:text-lg md:text-xl">
                "Step into the vibrant world of RJR BLOG, a digital expanse meticulously crafted to be more than just a repository of articles. It's a tapestry woven with threads of introspective narratives, captivating tales, and illuminating wisdom, fostering a community where curiosity thrives, minds expand, and hearts resonate with the myriad hues of human stories."
                </p>
              </div>
              <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                <Link
                  className="rounded-md bg-primary py-4 px-8 text-base font-semibold text-white 
                  hover:bg-primary/80"
                  href={"/blogs"}
                >
                  Explore All Blogs
                  
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
    </>
  );
}