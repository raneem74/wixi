import {createClient} from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'
import { useStore } from 'zustand';

const PROJECT_ID = "lh2an52s";
const DATASET = "production";

//store


//create images
export const client = createClient({
  projectId: PROJECT_ID,
  dataset: DATASET,
  useCdn: true,
  apiVersion: '2021-10-21',
  token: process.env.SANITY_TOKEN
})

const builder = imageUrlBuilder(client)

export function urlFor(source) {
  return builder.image(source)
}

// fetch the contents
export async function fetchDataFromStudio(data : string): Promise<any> {
const setIsLoading = useStore((state) => state.setIsLoading)
  let QUERY = encodeURIComponent(`*[_type == "${data}"]`);
  let URL = `https://${PROJECT_ID}.api.sanity.io/v2021-10-21/data/query/${DATASET}?query=${QUERY}`;
  
  try {





    const bears = useStore((state) => state.bears)
    const response = await fetch(URL);
    if (!response.ok) {
      console.log("can't fetch data!!")
      return [];
    }
    const data = await response.json();
    const { result } = data;
    return result;
  } catch (error) {
    console.error(error);
  }
}