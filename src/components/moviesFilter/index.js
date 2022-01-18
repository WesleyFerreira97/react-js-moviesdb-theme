import React, {useState, useEffect } from 'react'
import { MoviesFilterWrap, MobileDropDown, FormFilter } from './styles'
import { ImMenu3 } from "react-icons/im";
import { Accordion } from 'react-bootstrap';

export function MoviesFilter() {
    const [category, setCategory] = useState('All');
    const [openFilter, setOpenFilter] = useState(false);

    function openDropDown(e) {
        setOpenFilter(!openFilter);
        console.log(openFilter);
    }

    function handleSubmit(event) {
        setCategory(event.target.value);
    }

    useEffect( () => {
        console.log(category);
    }, [category]);

    useEffect(() => {

    },[]);

    return (
        <MoviesFilterWrap>
            <MobileDropDown onClick={openDropDown}>
                <ImMenu3 /> 
                <h3 className='dropdown-label'>Filter Movies</h3>
            </MobileDropDown>

            <FormFilter statusDropDown={openFilter}>
                <form className='form-wrap' onSubmit={handleSubmit}>
                    <div className='form-group'>
                        <label>Genres </label>
                        <select value={category} onChange={handleSubmit}>
                            <option value="all">All</option>
                            <option value="action">Action</option>
                            <option value="comedy">Comedy</option>
                            <option value="drama">Drama</option>
                        </select>
                    </div>
                    <div className='form-group'>
                        <label>Release Date </label>
                        <select value={category} onChange={handleSubmit}>
                            <option value="all">All</option>
                            <option value="action">Action</option>
                            <option value="comedy">Comedy</option>
                            <option value="drama">Drama</option>
                        </select>
                    </div>
                    <div className='form-group'>
                        <label>Vote Average </label>
                        <select value={category} onChange={handleSubmit}>
                            <option value="all">All</option>
                            <option value="action">Action</option>
                            <option value="comedy">Comedy</option>
                            <option value="drama">Drama</option>
                        </select>
                    </div>
                    {/* <input className='submit-btn' type="submit" value="Search" />  */}
                </form>
            </FormFilter>
        </MoviesFilterWrap>
    )
}
