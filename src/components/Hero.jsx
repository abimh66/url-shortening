import illustration from '../assets/illustration-working.svg';

function Hero({ children }) {
  return (
    <section className="px-5 pb-28 overflow-x-hidden">
      <div className="-mr-48">
        <img src={illustration} alt="illustration-working" />
      </div>
      <div className="flex flex-col items-center gap-5 text-center mt-10 font-medium text-body">
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
      {children}
    </section>
  );
}

export default Hero;
