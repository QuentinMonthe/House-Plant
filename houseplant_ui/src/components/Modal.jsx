import { useEffect, useState } from "react";
import { closeModal } from "../resources/modalSlice";
import { useDispatch, useSelector } from "react-redux";
import { addPlant } from "../services/plant.services";
import { CgClose } from "react-icons/cg";

const Modal = () => {
  const dispatch = useDispatch();
  const { update, loading } = useSelector((state) => state.plant);
  const { accessToken, userInfo } = useSelector((state) => state.user);
  const { showModal } = useSelector((state) => state.modal);
  const [image, setImage] = useState(null);
  const [name, setName] = useState("");
  const [species, setSpecies] = useState("");
  const [datePurchase, setDatePurchase] = useState("");
  const [wateringFrequency1, setWateringFrequency1] = useState(0);
  const [wateringFrequency2, setWateringFrequency2] = useState(0);
  const [waterRequirement, setWaterRequirement] = useState(0);

  const handleImage = (even) => {
    setImage(even.target.files[0]);
  };
  const handleName = (value) => {
    setName(value);
  };
  const handleSpecies = (value) => {
    setSpecies(value);
  };
  const handleDatePurchase = (value) => {
    setDatePurchase(value);
  };
  const handleWateringFrequency1 = (value) => {
    setWateringFrequency1(value);
  };
  const handleWateringFrequency2 = (value) => {
    setWateringFrequency2(value);
  };
  const handleWaterRequirement = (value) => {
    setWaterRequirement(value);
  };

  const handleModal = () => {
    dispatch(closeModal());
  };

  const handleAddPlant = () => {
    let value = wateringFrequency1 * 86400 + wateringFrequency2 * 3600;

    if (name && species && datePurchase && waterRequirement > 0 && value > 0) {
      const formData = new FormData();
      formData.append("image", image);
      formData.append("name", name);
      formData.append("species", species);
      formData.append("date_purchase", datePurchase);
      formData.append("watering_frequency", value);
      formData.append("water_requirement", waterRequirement);
      formData.append("user", userInfo.pk);

      setName("");
      setSpecies("");
      setDatePurchase("");
      setWaterRequirement(0);
      setWateringFrequency1(0);
      setWateringFrequency2(0);
      setImage(null);

      dispatch(addPlant({ data: formData, accessToken: accessToken }));
    }
  };

  useEffect(() => {
    if (!loading && update) {
      dispatch(closeModal());
    }
  }, [accessToken, dispatch, loading, update]);

  return (
    <div
      className={`${
        showModal ? "fadeIn flex" : "fadeOut hidden"
      } main-modal fixed w-full inset-0 z-50 overflow-hidden flex justify-center items-center animated faster bg-black dark:bg-white dark:bg-opacity-30 bg-opacity-70 transition duration-500 ease-in-out`}
    >
      <div className="modal-container bg-white p-6 dark:bg-dark w-11/12 md:max-w-2xl mx-auto rounded shadow-lg z-50 overflow-y-auto">
        <div className="modal-content py-4 text-left px-6">
          {/* Title */}
          <div className="flex justify-between items-center pb-3">
            <p className="text-2xl font-bold">Ajouter une nouvelle plante</p>
            <div
              onClick={() => handleModal()}
              className="modal-close cursor-pointer z-50 text-2xl"
            >
              <CgClose />
            </div>
          </div>

          <form
            onSubmit={() => handleAddPlant()}
            id="new-plant-form"
            className=""
          >
            {/* Body */}
            <div className="my-5">
              <div className="w-full max-md:max-w-md flex flex-col items-start my-4">
                <label
                  htmlFor="name"
                  className="text-neutral-700 dark:text-neutral-300 font-medium pointer-events-none mb-2 truncate leading-none"
                >
                  Nom de plante
                  <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  className="block min-h-[auto] w-full text-neutral-600 rounded-md border border-neutral-300 bg-white py-3 px-4 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:border-purple-blue focus:ring-purple-blue focus:ring-2"
                  id="name"
                  name="name"
                  autoComplete="name"
                  value={name}
                  onChange={(e) => handleName(e.target.value)}
                  placeholder="Nom de plante"
                  required
                />
              </div>
              <div className="w-full max-md:max-w-md flex flex-col items-start my-4">
                <label
                  htmlFor="species"
                  className="text-neutral-700 dark:text-neutral-300 font-medium pointer-events-none mb-2 truncate leading-none"
                >
                  Espèce <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  className="block min-h-[auto] w-full text-neutral-600 rounded-md border border-neutral-300 bg-white py-3 px-4 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:border-purple-blue focus:ring-purple-blue focus:ring-2"
                  id="species"
                  name="species"
                  autoComplete="species"
                  value={species}
                  onChange={(e) => handleSpecies(e.target.value)}
                  placeholder="Espèce"
                  required
                />
              </div>

              <div className="flex gap-10">
                <div className="w-full max-md:max-w-md flex flex-col items-start my-4">
                  <label
                    htmlFor="datePurchase"
                    className="text-neutral-700 dark:text-neutral-300 font-medium pointer-events-none mb-2 truncate leading-none"
                  >
                    Date d&apos;achat
                    <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="date"
                    className="block min-h-[auto] w-full text-neutral-600 rounded-md border border-neutral-300 bg-white py-3 px-4 leading-[1.475] outline-none transition-all duration-200 ease-linear focus:border-purple-blue focus:ring-purple-blue focus:ring-2"
                    id="datePurchase"
                    name="datePurchase"
                    autoComplete="datePurchase"
                    value={datePurchase}
                    onChange={(e) => handleDatePurchase(e.target.value)}
                    placeholder=""
                    required
                  />
                </div>
                <div className="w-full max-md:max-w-md flex flex-col items-start my-4">
                  <label
                    htmlFor="waterRequirement"
                    className="text-neutral-700 dark:text-neutral-300 font-medium pointer-events-none mb-2 truncate leading-none"
                  >
                    Besoin en eau (en Litre)
                    <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="number"
                    min={0}
                    className="block min-h-[auto] w-full text-neutral-600 rounded-md border border-neutral-300 bg-white py-3 px-4 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:border-purple-blue focus:ring-purple-blue focus:ring-2"
                    id="waterRequirement"
                    name="waterRequirement"
                    autoComplete="waterRequirement"
                    value={waterRequirement}
                    onChange={(e) => handleWaterRequirement(e.target.value)}
                    placeholder="3L"
                    required
                  />
                </div>
              </div>
              <div className="flex gap-10">
                <div className="w-full max-md:max-w-md flex flex-col items-start my-4">
                  <label
                    htmlFor="image"
                    className="text-neutral-700 dark:text-neutral-300 font-medium pointer-events-none mb-2 truncate leading-none"
                  >
                    Photo de la plante <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="file"
                    className="block min-h-[auto] w-full text-neutral-600 text-sm rounded-md border border-neutral-300 bg-white py-3 px-4 leading-[1.4] outline-none transition-all duration-200 ease-linear focus:border-purple-blue focus:ring-purple-blue focus:ring-2"
                    id="image"
                    name="image"
                    onChange={(e) => handleImage(e)}
                    required
                  />
                </div>

                <div className="w-full max-md:max-w-md flex flex-col items-start my-4">
                  <label
                    htmlFor="wateringFrequency"
                    className="text-neutral-700 dark:text-neutral-300 font-medium pointer-events-none mb-2 truncate leading-none"
                  >
                    Fréq. d&apos;arrosage (Jour | heure)
                    <span className="text-red-600">*</span>
                  </label>
                  <div className="flex gap-6">
                    <input
                      type="number"
                      min={0}
                      step="1"
                      className="block min-h-[auto] w-full text-neutral-600 rounded-md border border-neutral-300 bg-white py-3 px-4 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:border-purple-blue focus:ring-purple-blue focus:ring-2"
                      id="wateringFrequency1"
                      name="wateringFrequency1"
                      autoComplete="wateringFrequency1"
                      value={wateringFrequency1}
                      onChange={(e) => handleWateringFrequency1(e.target.value)}
                      placeholder="2 Jours"
                      required
                    />
                    <input
                      type="number"
                      min={0}
                      step="1"
                      className="block min-h-[auto] w-full text-neutral-600 rounded-md border border-neutral-300 bg-white py-3 px-4 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:border-purple-blue focus:ring-purple-blue focus:ring-2"
                      id="wateringFrequency2"
                      name="wateringFrequency2"
                      autoComplete="wateringFrequency2"
                      value={wateringFrequency2}
                      onChange={(e) => handleWateringFrequency2(e.target.value)}
                      placeholder="12 Heures"
                      required
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="flex justify-end pt-2">
              <button
                type="reset"
                onClick={() => handleModal()}
                className="focus:outline-none px-4 bg-gray-500 hover:!border-gray-500t p-3 rounded-lg !text-black"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="focus:outline-none px-4 bg-purple-blue hover!border-purple-blue p-3 ml-3 rounded-lg !text-white "
              >
                Confirm
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Modal;
