function ShimmerCard() {
  const style =
    "text-sm w-[250px] h-[300px] flex-row rounded-xl border-[1px] border-gray-200 shadow-sm mb-2 hover:shadow-xl sm:w-[300px] sm:h-[380px] sm:text-lg bg-[linear-gradient(to_right,#f1eded_0%,#ffffff_50%,#f1eded_100%)] bg-[length:200%_100%] animate-shimmer";
  return (
    <>
      <div className="mx-6 flex flex-col gap-2 sm:flex-row justify-evenly">
        <div className="w-60 h-8 border border-gray-300 rounded-2xl pl-4 mr-2 bg-[linear-gradient(to_right,#f1eded_0%,#ffffff_50%,#f1eded_100%)] bg-[length:200%_100%]"></div>
        <div className="w-28 h-8 border border-gray-300 rounded-2xl pl-4 mr-2 bg-[linear-gradient(to_right,#f1eded_0%,#ffffff_50%,#f1eded_100%)] bg-[length:200%_100%]"></div>
        <div className="w-28 h-8 border border-gray-300 rounded-2xl pl-4 mr-2 bg-[linear-gradient(to_right,#f1eded_0%,#ffffff_50%,#f1eded_100%)] bg-[length:200%_100%]"></div>
        <div className="w-28 h-8 border border-gray-300 rounded-2xl pl-4 mr-2 bg-[linear-gradient(to_right,#f1eded_0%,#ffffff_50%,#f1eded_100%)] bg-[length:200%_100%]"></div>
      </div>
      <div
        className="m-4 mt-6 grid justify-items-center 
    [grid-template-columns:repeat(auto-fit,minmax(300px,1fr))] gap-[10px]
    "
      >
        <div className={style}></div>
        <div className={style}></div>
        <div className={style}></div>
        <div className={style}></div>
        <div className={style}></div>
        <div className={style}></div>
        <div className={style}></div>
        <div className={style}></div>
      </div>
    </>
  );
}

export default ShimmerCard;
