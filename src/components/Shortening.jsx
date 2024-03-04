function Shortening() {
  return (
    <section className="absolute -bottom-40 left-1/2 -translate-x-1/2 rounded-xl font-medium flex flex-col gap-4 w-11/12 p-5 bg-shorten-mobile bg-origin-box bg-no-repeat bg-right-top bg-dark-violet">
      <input
        type="text"
        placeholder="Shorten a link here..."
        className="w-full p-3 rounded-lg"
      />
      <button className="w-full text-white text-body py-2 rounded-lg bg-cyan">
        Shorten it!
      </button>
    </section>
  );
}

export default Shortening;
