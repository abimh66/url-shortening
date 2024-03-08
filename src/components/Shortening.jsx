import UrlShortResult from './ui/UrlShortResult';

function Shortening() {
  return (
    <section className=" w-[95%] md:w-full -mt-24 md:-mt-16">
      <div className="rounded-lg font-medium md:py-8 flex flex-col md:px-10 md:flex-row gap-4 p-5 bg-shorten-mobile bg-origin-box bg-no-repeat bg-right-top bg-dark-violet">
        <input
          type="text"
          placeholder="Shorten a link here..."
          className="w-full md:w-4/5 p-3 rounded-md"
        />
        <button className="w-full md:flex-1 text-white text-body py-2 rounded-md bg-cyan">
          Shorten it!
        </button>
      </div>
      <div className="mt-5">
        <UrlShortResult />
      </div>
    </section>
  );
}

export default Shortening;
