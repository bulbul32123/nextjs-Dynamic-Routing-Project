export const fetchFromApi = async(url)=>{
    const res = await fetch(`https://dummyjson.com${url}`)
    const data = await res.json()
    return data
} 