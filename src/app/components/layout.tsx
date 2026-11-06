type PropTypes = {
  children: React.ReactNode;
};

let linkGroupOne = [
  { title: "project One", url: "/components/project-one" },
  { title: "project two", url: "/components/project-two" },
];

export default function ComponentsLayout({ children }: PropTypes) {
  return (
    <div className="w-full h-screen border flex flex-col">
      <div className=" border w-full h-12 shrink-0">Title bar</div>
      <div className="flex flex-row w-full flex-1 min-h-0 text-neutral-500">
        <div className="w-70 shrink-0 border-r border-neutral-300 p-2 overflow-auto">
          <ul>
            <div>
              <a href="/">Home</a>
            </div>
            <li className="flex flex-col">
              {linkGroupOne.map((link) => (
                <a key={link.title} className="border-b p-2 " href={link.url}>
                  {link.title}
                </a>
              ))}
            </li>
          </ul>
        </div>
        <div className="flex-1 border overflow-auto p-2">{children}</div>
      </div>
    </div>
  );
}
