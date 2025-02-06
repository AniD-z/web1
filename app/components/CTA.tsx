import Button from "./Button";

const CTA = () => (
  <section
    className="flexCenter marginY padding sm:flex-row flex-col bg-secondary rounded-[20px] box-shadow"
  >
    <div className="flex-1 flex flex-col">
      <h2 className="heading2">CONTACT us!</h2>
    
    </div>

    <div className="flexCenter sm:ml-10 ml-0 sm:mt-0 mt-10">
      <Button styles={`mt-10`} />
    </div>
  </section>
);

export default CTA;
