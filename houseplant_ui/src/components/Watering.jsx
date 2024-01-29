import { useSelector } from "react-redux";
import CardWatering from "./CardWatering";

const Watering = () => {
  const { plants } = useSelector((state) => state.plant);

  // const sortedList = (a, b) => {
  //   let val1 = +new Date(a.next_watering);
  //   let val2 = +new Date(b.next_watering);

  //   if (val2 > val1) {
  //     return -1;
  //   } else if (val2 < val1) {
  //     return 1;
  //   } else return 0;
  // };

  return (
    <div className="flex flex-wrap justify-between my-8 gap-y-10">
      {plants.map((plant) => (
        <CardWatering key={plant.code} plant={plant} />
      ))}
    </div>
  );
};

export default Watering;
