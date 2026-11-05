export default function HelloWorld({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className=" border min-h-screen p-5">{children}</div>;
}
