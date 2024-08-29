import Link from "next/link"


function Footer() {
  return (
    <footer className="bg-black text-gray-400 py-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 sm:px-6 lg:px-8">
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">About Us</h2>
          <p className="mb-4">
            Photography Studio is a premier destination for capturing the art and essence of photography. We nurture creativity from the ground up, fostering a vibrant community of photographers and clients.
          </p>
        </div>
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Follow Us</h2>
          <div className="flex space-x-4">
            <a
              href="https://www.facebook.com/navin.ganeri?mibextid=ZbWKwL"
              className="hover:text-white transition-colors duration-300"
            >
              Facebook
            </a>
            <a
              href="https://youtube.com/@ngnavin-nh2mz?si=aHaE7JxAXzJCjMHF"
              className="hover:text-white transition-colors duration-300"
            >
              YouTube
            </a>
            <a
              href="https://www.facebook.com/navin.ganeri?mibextid=ZbWKwL"
              className="hover:text-white transition-colors duration-300"
            >
              Instagram
            </a>
          </div>
        </div>
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Contact Us</h2>
          <p>Maharashtra, India</p>
          <p>Pune towarline, Nigdi</p>
          <Link href={'https://g.page/r/CbrFN817INX4EBM/review'}><p>Googlemap</p></Link>
          <p>Email: navinganeri@gmail.com </p>
          <p>Phone: (+91) 8857033036</p>
        </div>
      </div>
      <p className="text-center text-xs pt-8">Navin Ganeri © 2024 Photo Studio. All rights reserved.</p>
    </footer>
  )
}

export default Footer