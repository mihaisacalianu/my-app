export async function fetchData(url){
  const response = await fetch(url);
  const data = await response.json();
  if(!response.ok){
    throw new Error('Failed to fetch meals!')
  }
  console.log(data);
  return data.meals;
}
