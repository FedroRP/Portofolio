import React, { useState } from "react";
import kkn1 from "../assets/intership/kkn1.jpeg";
import kkn2 from "../assets/intership/kkn2.jpeg";
import kkn3 from "../assets/intership/kkn3.jpeg";
import bps from "../assets/intership/bps.jpg";
import bps1 from "../assets/intership/bps1.jpeg";
import bps2 from "../assets/intership/bps2.jpeg";
import ge1 from "../assets/intership/ge1.jpeg";
import ge2 from "../assets/intership/ge2.jpeg";
import ge3 from "../assets/intership/ge3.png";
import pen from "../assets/intership/kom1.jpeg";
import pen1 from "../assets/intership/kom2.jpeg";
import pen2 from "../assets/intership/kom3.jpeg";
import doc1 from "../assets/intership/doc1.jpeg";
import doc2 from "../assets/intership/doc2.jpeg";
import IT1 from "../assets/intership/IT1.jpeg"; // <-- ubah ke .jpg
import IT2 from "../assets/intership/IT2.jpeg"; // <-- ubah ke .jpg
import IT3 from "../assets/intership/IT3.jpeg"; // <-- ubah ke .jpg


import IT4 from "../assets/itbootcamp.jpg"; // <-- ubah ke .jpg
import kknLogo from "../assets/kkn.png";
import greatEduLogo from "../assets/startup.png";
import bpsLogo from "../assets/diskominfo.png";
import hmif from "../assets/hmif.png";

const internships = [
  {
    company: "Himpunan Mahasiswa Informatika (HMIF) Siliwangi University",
    position: "Head of Community Division",
    period: "Feb 2022 - Nov 2023",
    description:
      "The head of the community division at Siliwangi University oversees 7 IT communities.",
    documentation: [pen, pen1, pen2],
    logo: hmif,
  },
  {
    company: "Himpunan Mahasiswa Informatika (HMIF) Siliwangi University",
    position: "General Secretary",
    period: "Feb 2024 - Nov 2024",
    description:
      "General Secretary Manages all HMIF administration.",
    documentation: [doc1, doc2],
    logo: hmif,
  },
  {
    company: "Kuliah Kerja Nyata (KKN) Ciampanan Village",
    position: "Team Leader",
    period: "Dec 2023 - Feb 2024",
    description:
      "Led and managed a team of university students during a community service project.",
    documentation: [kkn1, kkn2, kkn3],
    logo: kknLogo,
  },
  {
    company: "Startup Campus",
    position: "Data Science Bootcamp Participant",
    period: "Feb 2024 - Jun 2024",
    description:
      "Completed data science and artificial intelligence certification.",
    documentation: [ge1, ge2, ge3],
    logo: greatEduLogo,
  },
  {
    company: "Diskominfo Kota Tasikmalaya",
    position: "Data Analyst",
    period: "Jul 2024 - Aug 2024",
    description:
      "collect material to create data and analyze it, then create a visualization.",
    documentation: [bps, bps1, bps2],
    logo: bpsLogo,
  },
  {
    company: "IT BOOTCAMP HMIF UNSIL",
    position: "Data Science Mentor",
    period: "Mei 2025 - Jun 2025",
    description:
      "For a week, students are guided to understand the fundamentals of Data Science, build simple AI models, and implement them into an appealing and functional visual interface. This program emphasizes the hands-on application of AI solutions.",
    documentation: [IT1, IT2, IT3],
    logo: IT4,
  },
];

const ExperienceSection = () => {
  const [selectedInternship, setSelectedInternship] = useState(null);
  const [carouselIndex, setCarouselIndex] = useState(0);

  const handleOpenModal = (internship) => {
    setSelectedInternship(internship);
    setCarouselIndex(0);
  };

  const handleCloseModal = () => {
    setSelectedInternship(null);
  };

  const nextSlide = () => {
    if (selectedInternship) {
      setCarouselIndex((prev) => (prev + 1) % selectedInternship.documentation.length);
    }
  };

  const prevSlide = () => {
    if (selectedInternship) {
      setCarouselIndex((prev) =>
        prev === 0 ? selectedInternship.documentation.length - 1 : prev - 1
      );
    }
  };

  return (
    <section
      id="experience"
      className="relative mt-16 border-b border-neutral-800 min-h-[600px] px-4 sm:px-6 lg:px-8 py-12"
    >
      {/* Header */}
      <div className="text-center space-y-3">
        <span className="inline-block bg-gradient-to-r from-red-600 via-red-500 to-red-500 text-white rounded-full text-xs sm:text-sm font-medium px-4 py-1 uppercase">
          My Experience
        </span>
        <h2 className="text-2xl sm:text-4xl lg:text-5xl mt-6 sm:mt-10 font-bold tracking-tight text-white">
          Explore{" "}
          <span className="bg-gradient-to-r from-red-600 to-red-500 text-transparent bg-clip-text">
            My Journey
          </span>
        </h2>
      </div>

      {/* Internship Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 sm:mt-16">
        {internships.map((internship, index) => (
          <div
          key={index}
          className="bg-neutral-900 rounded-xl shadow-lg hover:shadow-2xl transform transition duration-300 hover:scale-105 active:scale-95 p-6 relative group cursor-pointer"
          >
            <img
              src={internship.logo}
              alt={`${internship.company} Logo`}
              className="w-10 h-10 absolute top-4 right-4 rounded-full border border-neutral-700 shadow-sm object-cover"
              loading="lazy"
            />
            <h3 className="text-lg sm:text-xl font-bold text-red-500">{internship.company}</h3>
            <p className="text-xs sm:text-sm text-neutral-500 mt-1">{internship.period}</p>
            <h4 className="text-sm sm:text-md font-semibold mt-3 text-red-400">
              {internship.position}
            </h4>
            <p className="text-xs sm:text-sm text-neutral-400 mt-2 line-clamp-3">
              {internship.description}
            </p>
            <button
              onClick={() => handleOpenModal(internship)}
              className="mt-4 px-4 py-2 bg-white text-black text-sm font-medium rounded-lg hover:bg-neutral-200 transition-colors duration-200"
              aria-label={`View documentation for ${internship.company}`}
            >
              View Documentation
            </button>
          </div>
        ))}
      </div>

      {/* Modal for Carousel */}
      {selectedInternship && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm px-4"
          role="dialog"
          aria-modal="true"
          onClick={handleCloseModal}
        >
          <div
            className="bg-neutral-900 p-4 sm:p-6 rounded-xl shadow-2xl w-full max-w-md sm:max-w-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-lg sm:text-xl font-bold text-red-500">
              {selectedInternship.company}
            </h3>
            <h4 className="text-sm sm:text-md font-semibold mt-1 text-red-400">
              {selectedInternship.position}
            </h4>
            <div className="mt-4 relative">
              <img
                src={selectedInternship.documentation[carouselIndex]}
                alt={`Documentation ${carouselIndex + 1}`}
                className="w-full h-48 sm:h-64 object-contain rounded-md shadow-md transition-transform duration-300"
                loading="lazy"
              />
              <div className="absolute top-1/2 -translate-y-1/2 w-full flex justify-between px-2 sm:px-4">
                <button
                  onClick={prevSlide}
                  className="bg-neutral-800/70 text-white p-2 rounded-full hover:bg-neutral-700 transition-colors duration-200"
                  aria-label="Previous image"
                >
                  ◀
                </button>
                <button
                  onClick={nextSlide}
                  className="bg-neutral-800/70 text-white p-2 rounded-full hover:bg-neutral-700 transition-colors duration-200"
                  aria-label="Next image"
                >
                  ▶
                </button>
              </div>
            </div>
            <button
              onClick={handleCloseModal}
              className="mt-4 text-sm text-white hover:text-gray-300 hover:underline w-full text-center"
              aria-label="Close modal"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default ExperienceSection;