import { Films } from "../types/films";

const API_URL: string = "https://ghibliapi.vercel.app/films";

export const fetchFilms = async () => {
  try {
    const response = await fetch(API_URL);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`); //vad gör den här raden
    }

    const data: Films[] = await response.json();
    console.log(data);

    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error; //vad gör den här raden
  }
};
