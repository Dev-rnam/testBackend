import { useState, useEffect } from "react";
import { TService, deleteService, getServices } from "../api/serviceApi";

export default function Daschbord() {
  const [service, setService] = useState<TService[]>([]);

  useEffect(() => {
    async function fetchDecks() {
      const newServices = await getServices();
      setService(newServices);
    }
    fetchDecks();
  }, []);

  async function handleDeleteService(serviceId: string) {
    await deleteService(serviceId);
    setService(service.filter((service) => service._id !== serviceId));
  }
  return (
    <div>
      <div className="">
        <h1>My Daschbord</h1>
        <input type="search" placeholder="search" />
      </div>
      <div className="relative overflow-hidden shadow-md rounded-lg">
        <table className="table-fixed w-full text-left">
          <thead className="text-gray-200 uppercase bg-gray-500">
            <tr>
              <td className="py-0 border text-center  p-4">Product-ID</td>
              <td className="py-0 border text-center  p-4">Description</td>
              <td className="py-0 border text-center  p-4">Price</td>
              <td className="py-0 border text-center  p-4"></td>
              <td className="py-0 border text-center  p-4"></td>
            </tr>
          </thead>
          <tbody className="bg-white text-gray-500">
            {service.map((data) => (
              <tr key={data._id} className="py-2">
                <td className="py-2 border text-center  p-4">{data.author}</td>
                <td className="py-2 border text-center  p-4">{data.title}</td>
                <td className="py-2 border text-center  p-4">{data.size}</td>
                <td className="py-2 border text-center  p-4">Editer</td>
                <td
                  className="py-2 border text-center  p-4"
                  onClick={() => handleDeleteService(data._id)}
                >
                  Delete
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
