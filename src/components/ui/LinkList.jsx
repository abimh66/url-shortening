function LinkList({ title, links }) {
  return (
    <div className="flex flex-col gap-3 items-center md:items-start">
      <h4 className="text-white font-medium">{title}</h4>
      <ul className="text-center flex flex-col md:gap-1 md:text-left">
        {links.map((link, i) => (
          <li key={i} className="text-gray cursor-pointer hover:text-cyan">
            {link}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default LinkList;
