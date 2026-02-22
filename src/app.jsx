//= laz r
//= 02-21-2026 11:01
//= app.jsx

//= Dependencies =//
import { useState } from 'preact/hooks';
import MareepEnclosure from './components/MareepEnclosure.jsx';
import './app.css';

export function App() {
    return (
        <>
            <div id="titleInfo"><h1>Mareep Counter</h1></div>
            <div id="appWrapper">
                <MareepEnclosure />
            </div>
        </>
    )
}