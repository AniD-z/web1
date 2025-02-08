// CTA.tsx
"use client"; // <-- Add this line to mark the component as a Client Component

import { useState } from "react";
import Button from "./Button"; // Make sure to import the updated Button component
import ContactForm from "./ContactForm"; // Import your ContactForm component

const CTA = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const handleOpenForm = () => setIsFormOpen(true);
  const handleCloseForm = () => setIsFormOpen(false);

  return (
    <section
      className="flexCenter marginY padding sm:flex-row flex-col bg-secondary rounded-[20px] box-shadow"
    >
      <div className="flex-1 flex flex-col">
        <h2 className="heading2">CONTACT us!</h2>
      </div>

      <div className="flexCenter sm:ml-10 ml-0 sm:mt-0 mt-10">
        <Button
          styles={`mt-10`} // Pass custom styles
          onClick={handleOpenForm} // Pass the onClick handler to open the form
        />
      </div>

      {isFormOpen && <ContactForm onClose={handleCloseForm} />}
    </section>
  );
};

export default CTA;
