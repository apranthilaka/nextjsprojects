import ComponentOne from "./ComponentOne";
import ComponentTwo from "./ComponentTwo";
export default function TestComp() {
  return (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(min(600px,100%),1fr))] auto-rows-[minmax(800px,auto)]    gap-5">
      <ComponentOne />
      <ComponentTwo />
      <ComponentOne />
      <ComponentTwo />
      <ComponentTwo />
    </div>
  );
}
