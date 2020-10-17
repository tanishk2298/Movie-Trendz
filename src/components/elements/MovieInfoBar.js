import React from 'react'
import FontAwesome from 'react-fontawesome'
import {calcTime, convertMoney} from '../../helpers'
import {StyledMovieInfoBar} from '../styles/StyledMovieInfoBar'

const MovieInfoBar = ({time, budget,revenue,popularity}) => {
    return (
        <StyledMovieInfoBar>
            <div className="movieinfobar-content">
                <div className="movieinfobar-content-col">
                    <FontAwesome className="fa-time" name="clock-o" size="2x" style={{color:'#16d47b'}}/>
                    <span className="movieinfobar-info">Runtime : {calcTime(time)}</span>
                </div>
                <div className="movieinfobar-content-col">
                    <FontAwesome className="fa-budget" name="money" size="2x" style={{color:'#16d47b'}}/>
                    <span className="movieinfobar-info">Budget : {convertMoney(budget)}</span>
                </div>
                <div className="movieinfobar-content-col">
                    <FontAwesome className="fa-revenue" name="ticket" size="2x" style={{color:'#16d47b'}}/>
                    <span className="movieinfobar-info">Revenue : {convertMoney(revenue)}</span>
                </div>
                <div className="movieinfobar-content-col">
                    <FontAwesome className="fa-chart-line" name="ticket" size="2x" style={{color:'#16d47b'}}/>
                    <span className="movieinfobar-info">Popularity : {popularity}</span>
                </div>
            </div>
        </StyledMovieInfoBar>
    )
}

export default MovieInfoBar
