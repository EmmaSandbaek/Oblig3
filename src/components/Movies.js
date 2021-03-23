import Movie from './Movie';
import {useState} from 'react';
import {getMovie} from '../utils/movieService';
import styled from 'styled-components';

const StyledSec = styled.section`
    text-align: center;
    margin: auto;
    width: 100%;
`;

const StyledList = styled.ul`
    padding: 5%;
`;

const StyledButton = styled.button`
    color: palevioletred;
    width: 20%;
    border-radius: 2px;
    cursor: pointer;
    background-color: black;
    font-size: 20px;
    padding: 5px;
`;

const Movies = () => {
    const [data, setData] = useState([]);

    const button = async () => {
        const movies = await getMovie();
        console.log(movies);
        setData(movies);
    }
    return (
        <StyledSec>
            <StyledButton type="button" onClick= {button}>Get Movies</StyledButton>

            {/*Copied this code*/}
                <StyledList>{data?.length > 0 ? data.map((movie, index) =>
                <Movie key={index} title={movie.title} actor={movie.actor}/>) : null}</StyledList>
        
        </StyledSec>
    );
};

export default Movies;