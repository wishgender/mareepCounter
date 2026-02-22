//= laz r
//= 02-21-2026 11:46
//= MareepEnclosure.jsx

//= Dependencies =//
import { useState, useEffect } from 'preact/hooks';
import SleepButton from './SleepButton.jsx';
import { Mareep } from './Mareep.jsx';
import './enclosure.css';

const MareepEnclosure = () => {
    const [isSleepTime, setIsSleepTime] = useState(false);
    const [mareepCount, setMareepCount] = useState(0);
    const [currentMareepId, setCurrentMareepId] = useState(0);

    function handleMareepFinish() {
        setMareepCount(prev => prev + 1);
        setCurrentMareepId(prev => prev + 1); // forces new Mareep
    }

    useEffect(() => {
        console.log("isSleepTime changed:", isSleepTime);
    }, [isSleepTime]);

    return (
        <div id='enclosureWrapper'>
            <div id="mareepEnclosure">
                <img
                    id="nightSkyBG"
                    class={isSleepTime ? 'bright' : 'dim'}
                    src='assets/mareep_sleepy-4x.png'
                />
                {!isSleepTime && (
                    <div id='sleepButtonWrapper'>
                        <SleepButton onClick={() => setIsSleepTime(true)} />
                    </div>

                )}
                {isSleepTime && (
                    <>
                        <div class="mareepWrapper">
                            <Mareep
                                key={currentMareepId}
                                onFinish={handleMareepFinish}
                            />
                        </div>
                    </>
                )}
            </div>
            <div class="counter">
                Mareep: {mareepCount}
            </div>
        </div>
    )
}

export default MareepEnclosure;