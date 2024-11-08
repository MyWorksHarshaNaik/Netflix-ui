import React from 'react'
import { useDispatch } from 'react-redux';
// import { getGenres } from '../store';
import styled from 'styled-components';
import { fetchDataByGenre } from '../store';

const SelectGenre = ({genres, type}) => {
    const dispatch = useDispatch();
  return (
    <Select className="flex" 
        onChange={e=>{
            dispatch(fetchDataByGenre({genre: e.target.value, type}))
        }}
    >
      {genres.map((genre)=>{
        return <option value={genre.id} key={genre.id}>{genre.name}</option>
      })}
    </Select>
  )
}

const Select = styled.select`
  margin-left: 5rem;
  cursor: pointer;
  font-size: 1.4rem;
  padding: 0.5rem 1rem;
  background-color: rgba(0, 0, 0, 0.6);
  color: white;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 8px;
  transition: background-color 0.3s ease, border-color 0.3s ease;

  &:hover {
    background-color: rgba(0, 0, 0, 0.8);
    border-color: rgba(255, 255, 255, 0.5);
  }

  &:focus {
    outline: none;
    border-color: #1e90ff;
    background-color: rgba(0, 0, 0, 0.9);
  }
`;


export default SelectGenre;
