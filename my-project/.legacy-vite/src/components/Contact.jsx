import { useState } from "react";
import { CONTACT } from "../constants";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    alert("SYSTEM_MESSAGE: transmission logged successfully.");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="w-full px-4 md:px-margin-desktop py-20 border-b border-grid-line bg-background">
      <div className="mb-12 flex items-center gap-4">
        <span className="font-label-mono-bold text-label-mono-bold text-secondary">06 // INITIATE CONNECTION</span>
        <div className="h-px bg-grid-line flex-grow"></div>
      </div>

      <div className="flex flex-col lg:flex-row gap-12 bg-paper-white border border-primary p-6 md:p-12 relative overflow-hidden group">
        {/* Background Grid inside Panel */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none"></div>

        {/* Left: Info */}
        <div className="w-full lg:w-1/3 flex flex-col relative z-10">
          <h2 className="font-display-xl-mobile md:font-display-xl text-3xl md:text-5xl mb-6 leading-[1.1] md:leading-[1]">
            Comm. <br/>
            <span className="text-secondary italic">Terminal</span>.
          </h2>
          <p className="font-body-md text-on-surface-variant mb-12">
            Establish a direct secure link. Please provide your identification and message parameters.
          </p>

          <div className="flex flex-col gap-6 font-label-mono-bold text-sm">
            <div className="flex flex-col gap-1 border-b border-grid-line pb-4">
              <span className="text-[10px] text-metadata-gray uppercase">SECURE_COMMS_ID</span>
              <a href={`mailto:${CONTACT.email}`} className="text-primary hover:text-secondary transition-colors truncate">
                {CONTACT.email}
              </a>
            </div>
            <div className="flex flex-col gap-1 border-b border-grid-line pb-4">
              <span className="text-[10px] text-metadata-gray uppercase">VOICE_UPLINK</span>
              <span className="text-primary">{CONTACT.phoneNo}</span>
            </div>
          </div>
        </div>

        {/* Right: Form */}
        <div className="w-full lg:w-2/3 relative z-10">
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <div className="flex flex-col gap-2 relative group/input">
              <label htmlFor="name" className="font-label-mono-bold text-[10px] text-metadata-gray uppercase">IDENTIFIER [NAME]</label>
              <input
                type="text"
                id="name"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="bg-transparent border border-primary p-4 font-body-md text-primary outline-none focus:border-secondary transition-colors w-full rounded-none placeholder:text-metadata-gray/50"
                placeholder="Enter identifier..."
              />
              <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-primary opacity-0 group-focus-within/input:opacity-100 transition-opacity"></div>
            </div>

            <div className="flex flex-col gap-2 relative group/input">
              <label htmlFor="email" className="font-label-mono-bold text-[10px] text-metadata-gray uppercase">RETURN_ADDRESS [EMAIL]</label>
              <input
                type="email"
                id="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="bg-transparent border border-primary p-4 font-body-md text-primary outline-none focus:border-secondary transition-colors w-full rounded-none placeholder:text-metadata-gray/50"
                placeholder="Enter return address..."
              />
              <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-primary opacity-0 group-focus-within/input:opacity-100 transition-opacity"></div>
            </div>

            <div className="flex flex-col gap-2 relative group/input">
              <label htmlFor="message" className="font-label-mono-bold text-[10px] text-metadata-gray uppercase">PAYLOAD [MESSAGE]</label>
              <textarea
                id="message"
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows="4"
                className="bg-transparent border border-primary p-4 font-body-md text-primary outline-none focus:border-secondary transition-colors w-full rounded-none placeholder:text-metadata-gray/50 resize-none"
                placeholder="Enter payload data..."
              ></textarea>
              <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-primary opacity-0 group-focus-within/input:opacity-100 transition-opacity"></div>
            </div>

            <button
              type="submit"
              className="mt-4 bg-primary text-on-primary font-label-mono-bold text-label-mono-bold uppercase px-8 py-4 transition-all hover:bg-secondary active:translate-y-1 w-full text-center border-none cursor-pointer flex items-center justify-center gap-2"
            >
              TRANSMIT PAYLOAD
              <span className="material-symbols-outlined text-sm">send</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
