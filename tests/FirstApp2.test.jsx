import { render, screen } from "@testing-library/react";
import { FirstApp } from "../src/FirsrtApp";

describe('Pruebas en FirstApp', () => { 
    
    const title = 'Hi, I am a tester';
    const subtitle = 'and What is your name?';

    test('should match with snapshot', () => { 
        const { container } = render(<FirstApp title={title}/>);
        expect(container).toMatchSnapshot();
     });

    test('should show message "Hi, I am tester"', () => { 
        render(<FirstApp title = {title} />);
        expect( screen.getByText(title) ).toBeTruthy();
    });

    test('should show title in a H1', () => { 
        render(<FirstApp title = {title} />);
        expect( screen.getByRole('heading', {level: 1}).innerHTML ).toContain(title);
    });

    test('should show subtitle send by props', () => { 
        render(<FirstApp title = {title} subtitle = {subtitle}/>);
        expect( screen.getAllByText(subtitle).length).toBe(1);
    });
 })