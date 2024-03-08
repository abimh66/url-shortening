function LinkList({ title, links }) {
  return (
    <div className="flex flex-col gap-3 items-center">
      <h4 className="text-white font-medium">{title}</h4>
      <ul className="text-center">
        {links.map((link, i) => (
          <li key={i} className="text-gray">
            {link}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default LinkList;
