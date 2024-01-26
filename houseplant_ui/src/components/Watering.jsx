import { useDispatch, useSelector } from "react-redux";
import { BsClockFill } from "react-icons/bs";
import { watering } from "../services/plant.services";

const Watering = () => {
  const { plants } = useSelector((state) => state.plant);
  const dispatch = useDispatch();
  const { accessToken } = useSelector((state) => state.user);

  const dateCompare = (value) => {
    let dateNow = +new Date();
    let date = +new Date(value);

    if (date - dateNow > 72000000) {
      return "text-green-600 ";
    } else if (date - dateNow < 0) {
      return "text-red-600 animate-pulse ";
    } else {
      return "text-orange-500 ";
    }
  };

  // const sortedList = (a, b) => {
  //   let val1 = +new Date(a.next_watering);
  //   let val2 = +new Date(b.next_watering);

  //   if (val2 > val1) {
  //     return -1;
  //   } else if (val2 < val1) {
  //     return 1;
  //   } else return 0;
  // };

  const handleWatering = (plant) => {
    let data = {
      plant: plant.code,
    };

    dispatch(watering({ data: data, accessToken: accessToken }));
  };

  return (
    <div className="flex flex-wrap justify-between my-8 gap-y-10">
      {plants.map((plant) => (
        <div
          key={plant.code}
          className="w-full relative min-[900px]:w-[47%] flex border rounded-md bg-white dark:bg-dark"
        >
          <img
            src={plant.image ? plant.image : "./image/placeholder.jpg"}
            alt="..."
            className="rounded-md h-[10rem] w-[10rem]"
          />

          <div
            className={`${dateCompare(
              plant.next_watering
            )} absolute top-3 right-3 leading-none text-3xl`}
          >
            <BsClockFill />
          </div>

          <div className="flex flex-col items-start justify-around py-3 px-4 text-left">
            <div className="font-medium text-base">{plant.name}</div>
            <div className="my-3 font-medium ">
              Arrosage :
              <span className="font-normal">
                {" " + new Date(plant.next_watering).toLocaleString()}
              </span>
            </div>
            <div className="">
              <button type="button" onClick={() => handleWatering(plant)}>
                <a href="#!">Pointer l&apos;arroser</a>
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Watering;
