'use client'
import Link from "next/link"
import courseData from "../data/photography.json"
import { BackgroundGradient } from "./ui/background-gradient"
import Image from "next/image"
interface Photos {
    id: number,
    title: string,
    description: string,
    image: string,
    isFeatured: boolean,

}

function FeaturedCourses() {
    const featuredCourses = courseData.babyShoots.filter((course: Photos) => course.isFeatured)


    return (
        <div className="py-12 bg-gray-900">
            <div>
                <div className="text-center">
                    <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">SEE OUR SHOOTS</h2>
                    <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">Best PhotoGraphy</p>
                </div>
            </div>
            <div className="mt-10 mx-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
                    {featuredCourses.map((course: Photos) => (
                        <div key={course.id} className="flex justify-center">
                            <BackgroundGradient
                                className="flex flex-col rounded-[22px] bg-white dark:bg-zinc-900 overflow-hidden h-full max-w-sm">
                                <div className="p-2 sm:p-2 flex flex-col items-center text-center flex-grow">
                                    <Image
                                        src={course.image}
                                        height="1000"
                                        width="1000"
                                        className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                                        alt={course.title}
                                    />

                                </div>
                            </BackgroundGradient>
                        </div>
                    ))}
                </div>
            </div>
            <div className="mt-20 text-center">
                <Link href={"/courses"}
                    className="px-4 py-2 rounded border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200"
                >
                    View All
                </Link>
            </div>
        </div>
    )
}

export default FeaturedCourses