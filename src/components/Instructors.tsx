'use client'
import { WavyBackground } from "./ui/wavy-background"
import { AnimatedTooltip } from "./ui/animated-tooltip";

const instructors = [
  {
    id: 1,
    name: 'Navin Ganeri',
    designation: 'Editor,PhotoGraper',
    image:
      '/courses/maternity/n_p.jpg',
  },
  {
    id: 2,
    name: 'Manikanta',
    designation: 'PhotoGraper,Developer',
    image:
      '/courses/maternity/m_p.jpg',
  }
];

function Instructors() {
  return (
    <div className="relative h-[40rem] overflow-hidden flex items-center justify-center">
      <WavyBackground className="w-full max-w-7xl mx-auto flex flex-col items-center justify-center h-full">
        <h2 className="text-2xl md:text-4xl lg:text-7xl text-white font-bold text-center mb-8">Meet Our PhotoGrapers</h2>
        
        <div className="flex flex-row items-center justify-center mb-10 w-full">
          <AnimatedTooltip items={instructors} />
        </div>
      </WavyBackground>
    </div>
  )
}

export default Instructors