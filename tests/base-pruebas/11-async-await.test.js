import { getImagen } from "../../src/bases/11-async-await";

describe('async-await', () => { 
    
    test('should getImagen return a url', async() => { 
        const url = await getImagen();
        console.log(url);
        expect(typeof url).toBe('string');

     });

     test('should getImagen return an error', async() => { 
         const resp = await getImagen('fakeApiKey');
         expect(resp).toBe('image not found');
      });
 })