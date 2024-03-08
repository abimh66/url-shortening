import UrlShortResult from './ui/UrlShortResult';

function Shortening() {
  return (
    <section className=" w-[95%] -mt-24">
      <div className="rounded-lg font-medium flex flex-col gap-4 p-5 bg-shorten-mobile bg-origin-box bg-no-repeat bg-right-top bg-dark-violet">
        <input
          type="text"
          placeholder="Shorten a link here..."
          className="w-full p-3 rounded-md"
        />
        <button className="w-full text-white text-body py-2 rounded-md bg-cyan">
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
