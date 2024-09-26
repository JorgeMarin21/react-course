import { retornaArreglo } from "../../src/bases/07-deses-arr";

describe('07-deses-arr', () => { 
    test('should retornaArreglo return array', () => { 
        const arrayExpected = ['ABC', 123];
        const array = retornaArreglo();
        const [letters, numbers] = array;

        expect(array).toEqual(arrayExpected);
        expect(letters).toEqual('ABC');
        expect(numbers).toEqual(123);
        expect(typeof letters).toEqual('string');
        expect(typeof numbers).toEqual('number');    
     });

 })