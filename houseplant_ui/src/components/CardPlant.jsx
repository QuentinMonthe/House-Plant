/* eslint-disable react/prop-types */
import { BsTrashFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { deletePlant } from "../services/plant.services";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const CardPlant = ({ plant }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { accessToken } = useSelector((state) => state.user);
  const { update, loading } = useSelector((state) => state.plant);

  const handleDelete = () => {
    if (window.confirm("Voulez vous vraiment supprimer cette plante ?")) {
      dispatch(deletePlant({ accessToken: accessToken, code: plant.code }));
    }
  };

  useEffect(() => {
    if (!loading && update === "reload") {
      navigate("/home#plant");
    }
  }, [loading, navigate, update]);

  return (
    <div className="w-11/12 min-[500px]:w-1/2 md:w-1/3 lg:w-1/4">
      <div className="w-full px-4">
        <div className="relative">
          <img
            src={plant.image ? plant.image : "./image/placeholder.jpg"}
            alt="..."
            className="rounded w-full"
          />
          <div
            onClick={() => handleDelete()}
            className="absolute cursor-pointer top-2 right-2 bg-gray-100 text-red-600 text-xl rounded-md p-2"
          >
            <BsTrashFill />
          </div>
        </div>

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
  );
};

export default CardPlant;
