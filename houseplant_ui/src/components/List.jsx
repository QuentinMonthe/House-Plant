import Modal from "./Modal";
import { useDispatch, useSelector } from "react-redux";
import { openModal } from "../resources/modalSlice";

const List = () => {
  const dispatch = useDispatch();
  const { plants } = useSelector((state) => state.plant);

  const handleModal = () => {
    dispatch(openModal());
  };

  return (
    <div>
      <div className="flex items-start justify-end my-10 w-full ">
        <button onClick={() => handleModal()}>
          <a href="#!">Ajouter une plante</a>
        </button>
      </div>

      <Modal />

      <div className="flex flex-wrap max-sm:justify-center gap-y-10">
        {plants.map((plant) => (
          <div
            key={plant.code}
            className="w-11/12 min-[500px]:w-1/2 md:w-1/3 lg:w-1/4"
          >
            <div className="w-full px-4">
              <img
                src={plant.image ? plant.image : "./image/placeholder.jpg"}
                alt="..."
                className="rounded w-full"
              />
              <div className="my-3 flex flex-col text-left gap-3">
                <p>
                  <span className="font-medium">Plante : </span> {plant.name}
                </p>
                <p>
                  <span className="font-medium">Espèce : </span> {plant.species}
                </p>
                <p>
                  <span className="font-medium">Date d&apos;achat : </span>
                  {new Date(plant.date_purchase).toLocaleDateString()}
                </p>
                <p>
                  <span className="font-medium">Consommation : </span>{" "}
                  {plant.water_requirement + " L"}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default List;
