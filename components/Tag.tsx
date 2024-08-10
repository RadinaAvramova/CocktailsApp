const Tag = ({ title }: { title: string }) => {
  return (
    <div className="rounded-sm bg-slate-light px-3 py-1 xl:px-[1.0625rem] xl:py-2.5">
      <span className="base-14 cursor-default">{title}</span>
    </div>
  );
};

export default Tag;
