'use client'
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const photographyStudioTestimonials = [
  {
    quote:
      'Working with this studio transformed how I see and capture moments. The photographers are truly world-class!',
    name: 'Arjun Mehta',
    title: 'Portrait Client',
  },
  {
    quote:
      "The warmth and support I felt during my maternity shoot were unmatched. I've never felt more beautiful or comfortable in front of the camera.",
    name: 'Priya Sharma',
    title: 'Maternity Shoot Client',
  },
  {
    quote:
      "The studio gave me the confidence and direction I needed to create stunning images. I'm endlessly grateful for their personalized approach.",
    name: 'Rohan Gupta',
    title: 'Fashion Photography Client',
  },
  {
    quote:
      'Finding a photographer who understands my vision was challenging, but this studio paired me with someone who truly brought my ideas to life.',
    name: 'Meera Iyer',
    title: 'Wedding Photography Client',
  },
  {
    quote:
      'The editing services here took my photos to the next level. Highly recommend for anyone looking to enhance their images!',
    name: 'Vikram Patel',
    title: 'Photo Editing Client',
  },
];


function MusicSchoolTestimonials() {
  return (
    <div className="h-[40rem] w-full dark:bg-black dark:bg-grid-white/[0.2] relative flex flex-col items-center justify-center overflow-hidden">
      <h2 className="text-3xl font-bold text-center mb-8 z-10">Here Our Clients</h2>
      <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-6xl">
          <InfiniteMovingCards
            items={photographyStudioTestimonials}
            direction="right"
            speed="slow"
          />
        </div>
      </div>
    </div>
  )
}

export default MusicSchoolTestimonials