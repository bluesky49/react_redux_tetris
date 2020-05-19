import React from 'react';
import { StyledDisplay } from './styles/StyledDisplay'
const Display = ( { gameOver, text }) => (
    <StyledDisplay>{text}</StyledDisplay>
)

export default Display;