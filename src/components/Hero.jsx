import illustration from '../assets/illustration-working.svg';

function Hero() {
  return (
    <section className="px-5 pb-28  overflow-x-hidden  md:px-32 md:pb-32 md:flex ">
      <div className="-mr-48 md:m-0">
        <img
          src={illustration}
          alt="illustration-working"
          className="md:absolute md:right-0 md:w-2/5"
        />
      </div>
      <div className="flex flex-col items-center md:w-1/2 md:text-left md:items-start gap-5 text-center mt-10 font-medium text-body">
        <h1 className="font-bold text-5xl text-very-dark-violet">
          More than just shorter link
        </h1>
        <p className="text-gray-violet ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus ipsa ad
          blanditiis officia dolorem nam quos, sunt aut sed similique omnis non
          nisi earum vel cum quam mollitia in. Explicabo?
        </p>
        <button className="bg-cyan py-2 mt-5 w-[40%] rounded-full text-white">
          Get Started
        </button>
      </div>
    </section>
  );
}

export default Hero;
