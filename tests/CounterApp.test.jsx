import { fireEvent, render, screen } from "@testing-library/react";
import { CounterApp } from "../src/CounterApp";

describe('Counter App', () => { 
    const initialValue = 0;
    test('should match with the Snapshot', () => { 
        const { container } = render(<CounterApp value={initialValue}/>);
        expect(container).toMatchSnapshot();
     });

     test('should show 100 as initial value', () => { 
         render(<CounterApp value = {100} />);
         expect( screen.getByText(100) ).toBeTruthy();
         expect( screen.getByRole('heading', {level: 2}).innerHTML ).toContain('100'); // more accurate
     });

     test('should increment with +1 button', () => {
        render(<CounterApp value = {initialValue} />);
        fireEvent.click( screen.getByText('+1') );
        expect(screen.getByText('1')).toBeTruthy();
        expect( screen.getByRole('heading', {level: 2}).innerHTML ).toContain('1'); // more accurate
     });

     test('should decrement with +1 button', () => {
        render(<CounterApp value = {initialValue} />);
        fireEvent.click( screen.getByText('-1') );
        expect(screen.getAllByText('-1').length).toBe(2);
         expect( screen.getByRole('heading', {level: 2}).innerHTML ).toContain('-1'); // more accurate
     });

     test('should reset the counter', () => {
        render(<CounterApp value = {initialValue} />);
        fireEvent.click( screen.getByText('+1') );
        fireEvent.click( screen.getByText('+1') );
        fireEvent.click( screen.getByText('+1') );
        expect( screen.getByRole('heading', {level: 2}).innerHTML ).toContain('3'); 
        fireEvent.click( screen.getByText('Reset') );
        expect(screen.getByText('0')).toBeTruthy();
        expect( screen.getByRole('heading', {level: 2}).innerHTML ).toContain('0');
     });

     test('should reset the counter - second way', () => {
        render(<CounterApp value = {initialValue} />);
        fireEvent.click( screen.getByRole('button', {name: 'btn-plus'}) );
        fireEvent.click( screen.getByRole('button', {name: 'btn-plus'}) );
        expect( screen.getByRole('heading', {level: 2}).innerHTML ).toContain('2'); 
        fireEvent.click( screen.getByRole('button', {name: 'btn-reset'}) );
        expect(screen.getByText('0')).toBeTruthy();
        expect( screen.getByRole('heading', {level: 2}).innerHTML ).toContain('0');
     });
 });