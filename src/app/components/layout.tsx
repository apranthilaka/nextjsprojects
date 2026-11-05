type PropTypes = {
  children: React.ReactNode;
};

let linkGroupOne = [
  { title: "project One", url: "./project-one" },
  { title: "project two", url: "./project-two" },
];

export default function ComponentsLayout({ children }: PropTypes) {
  return (
    <div className="w-full h-screen border">
      <div className=" border w-full h-12">Title bar</div>
      <div className="flex flex-row w-full h-full text-neutral-500">
        <div className="w-70 border-r border-neutral-300 p-2">
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
        <div className="w-full h-full border overflow-auto p-2">{children}</div>
      </div>
    </div>
  );
}
