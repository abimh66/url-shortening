import iconBrand from '../assets/icon-brand-recognition.svg';
import iconDetailedRecord from '../assets/icon-detailed-records.svg';
import iconCustomizable from '../assets/icon-fully-customizable.svg';
import Statistic from './ui/Statistic';

const statisticsContent = [
  {
    icon: iconBrand,
    title: 'Brand Recognition',
    description:
      "Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content.",
  },
  {
    icon: iconDetailedRecord,
    title: 'Detailed Records',
    description:
      'Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.',
  },
  {
    icon: iconCustomizable,
    title: 'Fully Customizable',
    description:
      'Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.',
  },
];

function Statistics({ children }) {
  return (
    <section className="p-5 pb-16 flex flex-col gap-10 items-center bg-slate-200 -z-10">
      {children}
      <div className="flex flex-col gap-24">
        <div className="text-center flex flex-col gap-5">
          <h2 className="font-bold text-3xl text-very-dark-violet">
            Advannced Statistics
          </h2>
          <p className="text-gray-violet text-body font-medium">
            Track how your links are performing across the web with our advanced
            statistics dashboard.
          </p>
        </div>

        <div className="flex flex-col gap-16">
          {statisticsContent.map(({ icon, title, description }) => (
            <Statistic
              key={title}
              icon={icon}
              title={title}
              description={description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Statistics;
