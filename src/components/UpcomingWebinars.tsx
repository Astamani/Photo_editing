'use client';

import Link from "next/link";
import { HoverEffect } from "./ui/card-hover-effect";

function UpcomingWebinars() {
  const featuredPhotographyServices = [
    {
      title: 'Mastering Portrait Photography',
      description:
        'Explore advanced techniques to capture stunning and expressive portraits.',
      slug: 'mastering-portrait-photography',
      isFeatured: true,
    },
    {
      title: 'The Art of Landscape Photography',
      description:
        'Learn to capture the beauty of nature with expert landscape photography tips.',
      slug: 'art-of-landscape-photography',
      isFeatured: true,
    },
    {
      title: 'Creative Lighting Techniques',
      description:
        'Enhance your photography with innovative lighting techniques for different scenarios.',
      slug: 'creative-lighting-techniques',
      isFeatured: true,
    },
    {
      title: 'Essential Photo Editing Skills',
      description:
        'Develop your editing skills to transform good photos into great ones.',
      slug: 'essential-photo-editing-skills',
      isFeatured: true,
    },
    {
      title: 'Documentary Photography Insights',
      description:
        'Learn how to tell compelling stories through documentary photography.',
      slug: 'documentary-photography-insights',
      isFeatured: true,
    },
    {
      title: 'Digital Marketing for Photographers',
      description:
        'Discover strategies to effectively market your photography in the digital world.',
      slug: 'digital-marketing-for-photographers',
      isFeatured: true,
    },
  ];

  return (
    <div className="p-12 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center">
          <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">
             Hear Our
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            Thoughts About PhotoGraphy
          </p>
        </div>

        <div className="mt-10">
          <HoverEffect
            items={featuredPhotographyServices.map((webinar) => ({
              title: webinar.title,
              description: webinar.description,
              link: '/',
            }))}
          />
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/"
            className="px-4 py-2 rounded border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200"
          >
            View All Webinars
          </Link>
        </div>
      </div>
    </div>
  );
}

export default UpcomingWebinars;
