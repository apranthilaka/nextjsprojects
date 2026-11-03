type PropTypes = {
  title: string;
  paragraph: string;
};

export default function TestComp({ title, paragraph }: PropTypes) {
  return (
    <div className="border">
      <div className="font-bold">{title}</div>
      <div>{paragraph}</div>
      <div></div>
    </div>
  );
}
