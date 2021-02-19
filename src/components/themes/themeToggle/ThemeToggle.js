import React from 'react'
import { func } from 'prop-types';
import { ToggleStyled } from './ThemeToggleStyled';

const ThemeToggle = ({toggler}) => {
    return (
        <ToggleStyled>
            <div className="toggleWrapper">
                <input
                    onChange={(e) => {
                        toggler();
                        localStorage.setItem('themeToggle', `${e.target.checked}`)
                    }}
                    type="checkbox"
                    checked={localStorage.getItem('themeToggle') === 'true'}
                    className="dn"
                    id="dn"
                />
                <label htmlFor="dn" className="toggle">
                    <span className="toggle__handler">
                        <span className="crater crater--1"></span>
                        <span className="crater crater--2"></span>
                        <span className="crater crater--3"></span>
                    </span>
                    <span className="star star--1"></span>
                    <span className="star star--2"></span>
                    <span className="star star--3"></span>
                    <span className="star star--4"></span>
                    <span className="star star--5"></span>
                    <span className="star star--6"></span>
                </label>
            </div>
        </ToggleStyled>
    )
}

ThemeToggle.propTypes = {
toggler: func.isRequired,
}

export default ThemeToggle;