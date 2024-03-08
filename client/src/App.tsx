import { useState, useEffect } from "react";
import "./App.css";
import { TService, deleteService, getServices } from "./api/serviceApi";

function App() {
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
      <h1>DashBoard Service</h1>
      <table>
        {service.map((data) => (
          <tr key={data._id}>
            <td>{data.author}</td>
            <td>{data.title}</td>
            <td>{data.size}</td>
            <td>Editer</td>
            <td onClick={() => handleDeleteService(data._id)}>Delete</td>
          </tr>
        ))}
      </table>
    </div>
  );
}

export default App;
