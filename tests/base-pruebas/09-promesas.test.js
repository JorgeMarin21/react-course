import { getHeroeByIdAsync } from "../../src/bases/09-promesas";


describe('Prueba 09-promesas', () => { 

    test('should getHeroeByIdAsync return a Hero', (done) => { 
        const id = 1;
        getHeroeByIdAsync(id).then((hero) => {
            expect(hero.name).toBe('Batman');
            done();
        });
     });

     test('should getHeroeByIdAsync return error if hero does not exist', (done) => { 
         const id = 100;
         getHeroeByIdAsync(id).then( (hero) => {
            expect(hero).toBeFalsy();
            done();
         })
         .catch((error) => {
            expect(error).toBe(`No se pudo encontrar el héroe con id ${id}`);
            done();
         });
      });

 })