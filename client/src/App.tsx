import { useState, useEffect } from "react";
import "./App.css";
import { TService, deleteService, getServices } from "./api/serviceApi";
import HomePage from "./components/HomePage";

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
    <>
      <HomePage />
    </>
  );
}

export default App;
