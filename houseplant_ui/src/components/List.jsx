import Modal from "./Modal";
import { useDispatch, useSelector } from "react-redux";
import { openModal } from "../resources/modalSlice";
import CardPlant from "./CardPlant";

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
          <CardPlant key={plant.code} plant={plant} />
        ))}
      </div>
    </div>
  );
};

export default List;
