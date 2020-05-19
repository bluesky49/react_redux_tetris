import React from 'react';

import Stage from './Stage'
import { createStage } from '../gameHelpers'
import Display from './Display'
import StartButton from './StartButton';

const Tetris = () => {
    return (
        <div>
            <Stage stage={createStage()}/>
            <aside>
                <div>
                    <Display text ="Score" />
                    <Display text ="Rows" />
                    <Display text ="Level" />
                </div>
                <StartButton />
            </aside>
        </div>
    );
};

export default Tetris;