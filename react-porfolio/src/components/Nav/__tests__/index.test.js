import React from "react";
import { cleanup, render } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import Nav from '..';

const categories=[
    {name: 'portraits', description:'portraits of people in my life'}
]
const mockCurrentCategory = jest.fn();
const mockSetCurrentCategory =jest.fn();
const mockContactSelected =jest.fn();
const mockSetContactSelect = jest.fn();
afterEach(cleanup);
describe('Nav component',()=>{
    //baseline test
    it('renders',()=>{
        render(<Nav
        categories={categories}
        SetCurrentCategory={mockSetCurrentCategory}
        currentCategory={mockCurrentCategory}
        contactSelected ={mockContactSelected}
        setContactSelected ={mockSetContactSelect}
        />);
    });
    //snapshot test
    it('matches snapshot',()=>{
        const {asFragment} = render(<Nav
            categories={categories}
            SetCurrentCategory={mockSetCurrentCategory}
            currentCategory={mockCurrentCategory}
            />)
        //assert value comparison
        expect(asFragment()).toMatchSnapshot();
    })
})

describe('emoji is visible',()=>{
    it('inserts emoji into the h2',()=>{
        //Arrange
        const {getByLabelText}= render(<Nav categories={categories}
            SetCurrentCategory={mockSetCurrentCategory}
            currentCategory={mockCurrentCategory}></Nav>);
        expect(getByLabelText('camera')).toHaveTextContent('📸')
        //Assert

    })
})

describe('links are visible',()=>{
    it('inserts text into the links',()=>{
        //arrange
        const {getByTestId} = render(<Nav categories={categories}
            SetCurrentCategory={mockSetCurrentCategory}
            currentCategory={mockCurrentCategory}/>);
        expect(getByTestId('link')).toHaveTextContent('Oh Snap!')
        expect(getByTestId('about')).toHaveTextContent('About me')
        //assert

    })
})