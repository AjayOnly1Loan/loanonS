import React, { useEffect, useRef } from "react";
import "./TeamMember.css"; // Ensure this is the correct path

// Import images directly
import loan3 from "../assets/image/loan3.jpg";
import loan4 from "../assets/image/loan4.jpg";
import loan5 from "../assets/image/loan5.jpg";
import loan6 from "../assets/image/loan6.jpg";
import loan7 from "../assets/image/loan7.jpg";
import loan8 from "../assets/image/loan8.jpg";
import loan9 from "../assets/image/loan9.jpg";

// Import arrow icons
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const TeamMember = () => {
  const people = [
    { name: "HR", image: loan3 },
    { name: "MD", image: loan4 },
    { name: "CEO", image: loan5 },
    { name: "CTO", image: loan6 },
    { name: "IT Head", image: loan7 },
    { name: "Business Head", image: loan8 },
    { name: "Developer", image: loan9 },
  ];

  // Reference to the scrollable container
  const scrollContainerRef = useRef(null);
  const intervalRef = useRef(null); // Reference for the interval

  useEffect(() => {
    // Function to scroll the container automatically
    const autoSlide = () => {
      const scrollContainer = scrollContainerRef.current;
      if (scrollContainer) {
        const maxScrollLeft = scrollContainer.scrollWidth - scrollContainer.clientWidth;
        if (scrollContainer.scrollLeft >= maxScrollLeft) {
          // If reached the end, scroll back to the start
          scrollContainer.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          // Scroll by a certain amount to the right
          scrollContainer.scrollBy({ left: 300, behavior: "smooth" });
        }
      }
    };

    // Set interval to auto-slide the images every 3 seconds
    intervalRef.current = setInterval(autoSlide, 2000);

    // Cleanup interval on component unmount
    return () => clearInterval(intervalRef.current);
  }, []);

  const scrollToNext = () => {
    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      scrollContainer.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  const scrollToPrevious = () => {
    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      scrollContainer.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  return (
    <div className="eligible-person-container">
      <h2>Team Member</h2>
      <div className="scrollable-images" ref={scrollContainerRef}>
        {people.map((person, index) => (
          <div key={index} className="person-card">
            <img src={person.image} alt={person.name} className="person-image" />
            <div className="person-name">{person.name}</div>
          </div>
        ))}
      </div>
      <div className="scroll-buttons">
        <FaChevronLeft className="arrow-icon" onClick={scrollToPrevious} />
        <FaChevronRight className="arrow-icon" onClick={scrollToNext} />
      </div>
    </div>
  );
};

export default TeamMember;
