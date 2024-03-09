function Statistic({ icon, title, description, margin }) {
  return (
    <div
      className={`flex flex-col items-center text-center bg-white p-5 gap-5 rounded-lg md:items-start md:text-left ${
        margin !== 0 ? 'md:mt-' + margin * 10 : ''
      }`}>
      <div className="p-5 bg-dark-violet rounded-full -mt-14">
        <img src={icon} alt={title + ' icon'} />
      </div>
      <h3 className="font-bold text-2xl">{title}</h3>
      <p className="font-medium text-gray-violet">{description}</p>
    </div>
  );
}

export default Statistic;
