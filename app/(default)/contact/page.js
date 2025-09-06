import { FaGithub, FaExternalLinkAlt, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  return (
    <>
      <h3 className="text-3xl font-bold mb-6 ">Contact me</h3>
      <div className="flex justify-between flex-wrap">
        <div>
          <div className="flex gap-1 items-center mt-4">
            <FaEnvelope size={18} />
            <p>sargissimonyan2@gmail.com</p>
          </div>
          <div className="flex gap-1 items-center mt-4">
            <FaGithub size={18} />
            <a href="https://github.com/SargiSimonyan" target="_blank" rel="noreferrer">SargiSimonyan</a>
          </div>
          <div className="flex gap-1 items-center mt-4">
            <FaLinkedin size={18} />
            <a href="https://www.linkedin.com/in/sargis-simonyan-64039a27a/" target="_blank" rel="noreferrer">Sargis Simonyan</a>
          </div>
        </div>
        <div>
          <p className="text-lg text-gray-700 mb-6 text-center">
            For contact you may to send me message           
          </p>
          <form 
            action="https://formspree.io/f/mvgqwyan"
            method="POST"
            className="space-y-4"
          >
            <div>
              <label className="block mb-1 font-medium">Name</label>
              <input name="name" type="text" className="w-full border border-gray-300 p-3 rounded" placeholder="Your name" required />
            </div>
            <div>
              <label className="block mb-1 font-medium">Email</label>
              <input name="email" type="email" className="w-full border border-gray-300 p-3 rounded" placeholder="you@example.com" required />
            </div>
            <div>
              <label className="block mb-1 font-medium">Message</label>
              <textarea name="message" className="w-full border border-gray-300 p-3 rounded" rows="5" placeholder="Your message" required></textarea>
            </div>
            <button type="submit" className="bg-black text-white px-6 py-3 rounded hover:bg-gray-800 transition">Send Message</button>
          </form>
        </div>
      </div>
    
      
    </>
  );
}
