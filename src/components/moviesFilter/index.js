import React, {useState, useEffect } from 'react'
import { MoviesFilterWrap, MobileDropDown, Form } from './styles'
import { ImMenu3 } from "react-icons/im";

export function MoviesFilter() {
    const [category, setCategory] = useState('All');

    function handleChange(e) {

    }

    function handleSubmit(event) {
        setCategory(event.target.value);
    }

    useEffect( () => {
        console.log(category);
    }, [category]);

    return (
        <MoviesFilterWrap>
            <MobileDropDown>
                <ImMenu3 /> 
                <h3>Filter Movies</h3>
            </MobileDropDown>

            <Form>
                <form onSubmit={handleSubmit}>
                    <label>Select Movie</label>
                    <select value={category} onChange={handleSubmit}>
                        <option value="all">All</option>
                        <option value="action">Action</option>
                        <option value="comedy">Comedy</option>
                        <option value="drama">Drama</option>
                    </select>
                    <label>Select Movie</label>
                    <select value={category} onChange={handleSubmit}>
                        <option value="all">All</option>
                        <option value="action">Action</option>
                        <option value="comedy">Comedy</option>
                        <option value="drama">Drama</option>
                    </select>
                    <input type="submit" value="Submit" /> 
                </form>
            </Form>
        </MoviesFilterWrap>
    )
}
