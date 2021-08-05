

function BannerCard() {
  return (
    <div
      style={{ cursor: "grab" }}
      className="flex w-[500px] h-[285px] flex flex-col rounded-md shadow-sm bg-white text-gray-300 relative"
    >
Yooooo
      <div className=" absolute top-0 left-0 w-full h-full overflow-hidden rounded-t-2xl">
        <div className="absolute w-[350px] h-[350px] -top-16 -right-44 z-10 bg-gray-100  rounded-full"></div>
      </div>
    </div>
  );
}

export default BannerCard;
