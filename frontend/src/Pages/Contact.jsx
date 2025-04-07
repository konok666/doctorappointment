import React from "react";
import "../Style/Contact.css";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <main className="container mx-auto p-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left Section */}
        <div className="relative bg-white rounded-xl shadow p-6 flex flex-col text-left">
          <div className="flex items-start gap-4">
            <img
              src="contact_image.png"
              alt="Doctor with patient"
              className="w-32 h-auto rounded-lg object-cover shadow"
            />
            <div>
              <h2 className="text-lg font-bold mb-2">OUR OFFICE</h2>
              <p>AaBi Station Side Road</p>
              <p>Mahuli485, Saptari, Nepal</p>
              <p>Tel: (483) 672-7383</p>
              <p>Email: AaBi485@gmail.com</p>
            </div>
          </div>
          <div className="mt-6">
            <h3 className="text-lg font-bold mb-2">CAREERS AT PRESCRIPTO</h3>
            <p>Learn more about our teams and job openings.</p>
          </div>
        </div>

        {/* Right Section */}
        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="text-xl font-bold mb-4">
            CONTACT <span className="text-teal-500">US</span>
          </h2>
          <form className="space-y-4">
            <div>
              <input
                type="email"
                placeholder="Email"
                className="w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
            </div>
            <div>
              <textarea
                placeholder="Comment"
                className="w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-teal-500"
                rows="4"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-teal-500 text-white py-2 px-6 rounded-lg hover:bg-teal-600"
            >
              Send
            </button>
          </form>
        </div>
      </main>
    </div>
  );
};

export default Contact;
