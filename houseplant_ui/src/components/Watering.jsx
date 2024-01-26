const Watering = () => {
  return (
    <div className="flex flex-wrap justify-between my-8">
      <div className="w-full md:w-[47%] flex gap-8 border rounded-md bg-white dark:bg-dark">
        <img
          src="./image/placeholder.jpg"
          alt="..."
          className="rounded-md h-[12rem] w-[12rem]"
        />

        <div className="flex flex-col items-start justify-center">
          <div className="my-3">Lorem, ipsum dolor.</div>
          <div className="my-3">Prochain arrosage: 30 Jan. 2024</div>
          <div className="">
            <button>
              <a href="#!">Arroser</a>
            </button>
          </div>
        </div>
      </div>

      <div className="w-full md:w-[47%] flex gap-8 border rounded-md bg-white dark:bg-dark">
        <img
          src="./image/placeholder.jpg"
          alt="..."
          className="rounded-md h-[12rem] w-[12rem]"
        />

        <div className="flex flex-col items-start justify-center">
          <div className="my-3">Lorem, ipsum dolor.</div>
          <div className="my-3">Prochain arrosage: 30 Jan. 2024</div>
          <div className="">
            <button>
              <a href="#!">Arroser</a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Watering;
