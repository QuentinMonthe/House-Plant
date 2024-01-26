import { useState } from "react";
import Modal from "./Modal";

const List = () => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      <div className="flex items-start justify-end my-10 w-full ">
        <button onClick={() => openModal()}>
          <a href="#!">Ajouter une plante</a>
        </button>
      </div>

      <Modal closeModal={closeModal} showModal={showModal} />

      <div className="flex flex-wrap justify-between">
        <div className="w-[47%] md:w-[30%]">
          <img src="./image/placeholder.jpg" alt="..." className="rounded" />
          <div className="my-3 flex flex-col gap-2">
            <p>Lorem, ipsum dolor.</p>
            <p>Espèce : Lorem, ipsum </p>
          </div>
        </div>

        <div className="w-[47%] md:w-[30%]">
          <img src="./image/placeholder.jpg" alt="..." />
          <div>Lorem, ipsum dolor.</div>
        </div>

        <div className="w-[47%] md:w-[30%]">
          <img src="./image/placeholder.jpg" alt="..." />
          <div>Lorem, ipsum dolor.</div>
        </div>
      </div>
    </div>
  );
};

export default List;
