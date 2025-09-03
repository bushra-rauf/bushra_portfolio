const ContactForm = () => {
  return (
    <form id='contactform'
      action="https://formsubmit.co/beeo2123@gmail.com"
      method="POST"
      className="mt-15 max-w-lg mx-auto space-y-6 p-8 bg-white shadow-2xl rounded-2xl border border-gray-100"
    >
      <input type="hidden" name="_captcha" value="false" />

      {/* Heading */}
      <h2 className="text-2xl font-bold text-center text-indigo-600">Get in Touch</h2>

      {/* Name */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 outline-none transition"
        />
      </div>

      {/* Email */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 outline-none transition"
        />
      </div>

      {/* Message */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
        <textarea
          name="message"
          placeholder="Your Message"
          required
          className="w-full p-3 border border-gray-300 rounded-xl h-32 focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 outline-none transition"
        />
      </div>

      {/* Button */}
      <button
        type="submit"
        className="w-full bg-indigo-600 text-white py-3 rounded-xl font-semibold shadow-md hover:bg-indigo-700 hover:shadow-lg transition transform hover:-translate-y-0.5"
      >
        Send Message ✉️
      </button>
    </form>
  );
};

export default ContactForm;
