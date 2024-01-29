import axios from "axios";
import { useEffect, useState } from "react";
import { API_URL } from "../resources/Data";
import { useSelector } from "react-redux";

const History = () => {
  const [history, setHistory] = useState([]);
  const { accessToken } = useSelector((state) => state.user);

  useEffect(() => {
    const config = {
      headers: { Authorization: `Bearer ${accessToken}` },
    };

    axios
      .get(API_URL + "/watering/", config)
      .then((res) => {
        setHistory(res.data);
      })
      .catch((err) => console.error(err));
  }, [accessToken]);

  return (
    <div className="flex flex-col">
      <div className="overflow-x-auto sm:mx-0.5 lg:mx-0.5">
        <div className="py-2 inline-block min-w-full sm:py-6 lg:py-8">
          <div className="overflow-hidden">
            <table className="min-w-full">
              <thead className="bg-gray-200 border-b">
                <tr>
                  <th
                    scope="col"
                    className="text-sm font-medium text-gray-900 px-6 py-4 text-center"
                  >
                    Code
                  </th>
                  <th
                    scope="col"
                    className="text-sm font-medium text-gray-900 px-6 py-4 text-center"
                  >
                    Nom
                  </th>
                  <th
                    scope="col"
                    className="text-sm font-medium text-gray-900 px-6 py-4 text-center"
                  >
                    Arrosage prévu
                  </th>
                  <th
                    scope="col"
                    className="text-sm font-medium text-gray-900 px-6 py-4 text-center"
                  >
                    Arrosage réel
                  </th>
                  <th
                    scope="col"
                    className="text-sm font-medium text-gray-900 px-6 py-4 text-center"
                  >
                    Quantité d&apos;eau utilisé
                  </th>
                </tr>
              </thead>
              <tbody>
                {history.map((item) => (
                  <tr
                    key={item.code}
                    className="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100"
                  >
                    <td className="px-6 py-4 text-center max-w-[4rem] truncate whitespace-nowrap text-sm font-medium text-gray-900">
                      {item.plant.code}
                    </td>
                    <td className="text-sm text-center text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      {item.plant.name}
                    </td>
                    <td className="text-sm text-center text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      {new Date(item.date_planned).toLocaleString()}
                    </td>
                    <td className="text-sm text-center text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      {item.date_completion
                        ? new Date(item.date_completion).toLocaleString()
                        : "-/-"}
                    </td>
                    <td className="text-sm text-center text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      {item.quantity_water}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default History;
