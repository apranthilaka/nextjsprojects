type PropTypes = {
  children: React.ReactNode;
};

export default function ComponentsLayout({ children }: PropTypes) {
  return (
    <div className="flex flex-row w-full h-screen text-neutral-500">
      <div className="w-70 border-r border-neutral-300 p-2">Sidebar</div>
      <div className="w-full  p-2">{children}</div>
    </div>
  );
}
