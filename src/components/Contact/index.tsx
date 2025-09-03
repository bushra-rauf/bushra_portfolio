"use client";
import { Mail, Phone, Linkedin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contactme" className="py-20 bg-gradient-to-b from-white to-indigo-500">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-indigo-600 mb-10">
          Contact Me
        </h2>

        <div className="grid gap-6 sm:grid-cols-3">
          {/* Email */}
          <a
            href="mailto:beeo2123@gmail.com"
            className="flex flex-col items-center p-6 bg-white rounded-2xl shadow-md border border-indigo-100 hover:shadow-lg hover:-translate-y-1 transition"
          >
            <Mail className="w-8 h-8 text-indigo-600 mb-3" />
            <p className="font-medium text-gray-700">Email</p>
            <span className="text-sm text-gray-500">beeo2123@gmail.com</span>
          </a>

          {/* Phone */}
          <a
            href="tel:0739863579"
            className="flex flex-col items-center p-6 bg-white rounded-2xl shadow-md border border-indigo-100 hover:shadow-lg hover:-translate-y-1 transition"
          >
            <Phone className="w-8 h-8 text-indigo-600 mb-3" />
            <p className="font-medium text-gray-700">Phone</p>
            <span className="text-sm text-gray-500">0739863579</span>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/bushra-rauf-584020220/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center p-6 bg-white rounded-2xl shadow-md border border-indigo-100 hover:shadow-lg hover:-translate-y-1 transition"
          >
            <Linkedin className="w-8 h-8 text-indigo-600 mb-3" />
            <p className="font-medium text-gray-700">LinkedIn</p>
            <span className="text-sm text-gray-500">View Profile</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
