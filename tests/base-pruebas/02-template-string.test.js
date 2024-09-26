import { getSaludo } from "../../src/bases/02-template-string";

describe('template string', () => { 
    test('should getSaludo return "Hola Jorge"', () => { 
        const name = 'Jorge';
        const message = getSaludo(name);
        expect(message).toBe('Hola Jorge')
     });
 })