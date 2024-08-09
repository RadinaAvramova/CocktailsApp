import LoadingGraphic from "@/components/graphics/LoadingGraphic";

const Loading = () => {
  return (
    <main className="screen-center">
      <div className="vertical-center gap-[1.875rem]">
        <LoadingGraphic />
        <h2 className="semibold-40 animate-pulse ">Preparing Your Drink...</h2>
      </div>
    </main>
  );
};

export default Loading;
