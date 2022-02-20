import React from "react";
import{render,cleanup} from '@testing-library/react'
import About from '..'


afterEach(cleanup);

describe('About component',()=>{
    //renders About test
    //first Test
    it('renders',()=>{
        render(<About />);
    })
    //Second Test
    it('matches snapshot DOM node structure',()=>{
        //render About
        const {asFragment} = render(<About/>)
        expect(asFragment()).toMatchSnapshot();
    })

})