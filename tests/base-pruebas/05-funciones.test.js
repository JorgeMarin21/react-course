import { getUser, getUsuarioActivo } from "../../src/bases/05-funciones";

describe('05-funciones', () => { 
    test('should getUser return object', () => { 
        const testUser = {
            uid: 'ABC123',
            username: 'JorgeMarin'
        };
        const user = getUser();

        expect(user).toEqual(testUser);
     });

     test('should getUsuarioActivo return object', () => { 
         const testUser = {
             uid: 'ABC567',
             username: 'JorgeMarin'
         };
         const user = getUsuarioActivo('JorgeMarin');
 
         expect(user).toEqual(testUser);
      });
 })