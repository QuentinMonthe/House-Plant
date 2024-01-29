/* eslint-disable react/prop-types */
import { BsClockFill } from "react-icons/bs";
import { watering } from "../services/plant.services";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

const CardWatering = ({ plant }) => {
  const dispatch = useDispatch();
  const { accessToken } = useSelector((state) => state.user);
  const [quantityWater, setQuantityWater] = useState(0);

  const handleQuantityWater = (value) => {
    setQuantityWater(value);
  };

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

  const handleWatering = () => {
    let data = {
      plant: plant.code,
      quantity_water: quantityWater,
    };

    if (quantityWater > 0) {
      dispatch(watering({ data: data, accessToken: accessToken }));
    } else {
      alert("Veuillez renseigner une quantité d'eau (en Litre) appropriée!");
    }
  };

  return (
    <div className="w-full relative lg:w-[48%] flex border rounded-md bg-white dark:bg-dark">
      <img
        src={plant.image ? plant.image : "./image/placeholder.jpg"}
        alt="..."
        className="rounded-md h-[14rem] w-auto"
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
        <div className="mt-3 font-medium ">
          Arrosage :
          <span className="font-normal">
            {" " + new Date(plant.next_watering).toLocaleString()}
          </span>
        </div>
        <div className="mt-3 font-medium ">
          Consommation :
          <span className="font-normal">{plant.water_requirement + " L"}</span>
        </div>

        <form
          onSubmit={() => handleWatering(plant)}
          className="flex gap-2 mt-3"
        >
          <div className="w-2/5 flex items-center gap-1 justify-center">
            <input
              type="number"
              min={0}
              className="block min-h-[auto] w-full text-neutral-600 rounded-md border border-neutral-300 bg-white py-2.5 px-4 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:border-purple-blue focus:ring-purple-blue focus:ring-2"
              id={"quantity-" + plant.code}
              name={"quantity-" + plant.code}
              autoComplete="quantityWater"
              value={quantityWater}
              onChange={(e) => handleQuantityWater(e.target.value)}
              placeholder="Qté d'eau (en L)"
              required
            />
            <label className="w-full" htmlFor={"quantity-" + plant.code}>
              Qté (L)
            </label>
          </div>
          <button type="sumit" className="cursor-pointer">
            Pointer l&apos;arroser
          </button>
        </form>
      </div>
    </div>
  );
};

export default CardWatering;
