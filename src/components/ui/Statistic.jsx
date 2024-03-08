function Statistic({ icon, title, description }) {
  return (
    <div className="flex flex-col items-center text-center bg-white p-5 gap-5 rounded-lg">
      <div className="p-5 bg-dark-violet rounded-full -mt-14">
        <img src={icon} alt={title + ' icon'} />
      </div>
      <h3 className="font-bold text-2xl">{title}</h3>
      <p className="font-medium text-gray-violet">{description}</p>
    </div>
  );
}

export default Statistic;
