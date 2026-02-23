import { mockData } from "./mockData";

export const fetchData = async () => {
    await new Promise(resolve => setTimeout(resolve, 300));
    return mockData;
}