import ComponentOne from "./ComponentOne";
import ComponentTwo from "./ComponentTwo";
export default function ProjectTwo() {
  return (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(min(600px,100%),1fr))] auto-rows-[minmax(800px,auto)] divide-x divide-y divide-gray-300 border border-gray-300">
      <ComponentOne />
      <ComponentTwo />
      <ComponentOne />
      <ComponentTwo />
      <ComponentTwo />
      <ComponentOne />
      <ComponentTwo />
      <ComponentOne />
      <ComponentTwo />
      <ComponentTwo />
    </div>
  );
}
