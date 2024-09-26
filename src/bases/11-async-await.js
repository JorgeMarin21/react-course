
export const getImagen = async(apiKey = 'WT8OA8tbezhB2pb8VEa8IDBbdY3GaZNr') => {

    try {

        const resp   = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);
        const { data } = await resp.json(); 

        const { url } = data.images.original;
        return url;

    } catch (error) {
        return 'image not found';
    }
    
    
    
}

 getImagen();



