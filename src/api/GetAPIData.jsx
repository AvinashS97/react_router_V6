// Step-1 -> Create Function to Fetch API
// Step-2 -> Pass that function name as the value of the loader property in that page route
// Step-3 -> Get the data of the API by using the useLoaderData()

export const getMoviesData = async() => {
    try {
        const response = await fetch(
            `https://www.omdbapi.com/?i=tt3896198&apikey=${import.meta.env.VITE_API_KEY}&s=titanic&page=1`
        );
        const data = response.json();
        return data;
    }catch (error) {
        console.log(error);
    };
};
