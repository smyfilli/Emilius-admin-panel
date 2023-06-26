 const apiUrl = 'https://jsonplaceholder.typicode.com/users'
 
 async function fetchData(id='') {
  const response = await fetch(apiUrl+'/'+id) // replace with your API endpoint
     ;
   const data = await response.json();
   return data;
}


export default fetchData;