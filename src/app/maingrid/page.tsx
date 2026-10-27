import ProjectOne from "@/app/projectone/page";

export default function HelloWorld() {
  return (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(400px,1fr))] h-full ">
      <ProjectOne />
      <ProjectOne />
      <ProjectOne />
      <ProjectOne />
      <ProjectOne />
      <ProjectOne />
    </div>
  );
}
