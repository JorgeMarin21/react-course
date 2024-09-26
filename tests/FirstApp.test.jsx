import { render } from "@testing-library/react";
import { FirstApp } from "../src/FirsrtApp";

describe('Pruebas en FirstApp', () => { 
    // test('should match with the snapshot', () => { 
    //     const title = 'El titulo';
    //     const subtitle = 'El subtitulo';
    //     const {container} = render(<FirstApp title = {title} subtitle = {subtitle}/>)
    //     expect(container).toMatchSnapshot();
    //  });


    test('should show title in h1', () => { 
        const title = 'El titulo';
        const subtitle = 'El subtitulo';
        const {container, getByText, getByTestId} = render(<FirstApp title = {title} subtitle = {subtitle}/>);

        const h1 = container.querySelector('h1');

        expect(getByText(title)).toBeTruthy();
        expect(getByTestId('test-title').innerHTML).toBe(title);
        // expect(h1.innerHTML).toBe(title);
        // expect(h1.innerHTML).toContain(title);

     });

     test('should show subtitle send by props', () => { 
         const title = 'El titulo';
         const subtitle = 'El subtitulo';
         const { getByText, getAllByText} = render(<FirstApp title = {title} subtitle = {subtitle}/>);
 
 
         expect(getByText(subtitle)).toBeTruthy();
         expect(getAllByText(subtitle).length).toBe(1); // All coincidences with the same subtitle
 
      });
 })