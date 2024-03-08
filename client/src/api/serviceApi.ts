import { API_URL } from "./config";

export type TService = {
    title: string;
    author: string;
    size: string;
    _id: string;
  };
  
  export async function getServices(): Promise<TService[]> {
    const response = await fetch(`${API_URL}/decks`);
    return response.json();
  }


export async function createService(title: string, size: string, date: Date) {
  const response = await fetch(`${API_URL}/service`, {
    method: "POST",
    body: JSON.stringify({
      title,
      size,
      date,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response.json();
}

export async function getService(serviceId: string): Promise<TService> {
    const response = await fetch(`${API_URL}/decks/${serviceId}`);
    return response.json();
  }
  

  export async function deleteService(serviceId: string) {
    await fetch(`${API_URL}/service/${serviceId}`, {
      method: "DELETE",
    });
  }
  
