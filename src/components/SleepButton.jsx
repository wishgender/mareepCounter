//= laz r
//= 02-21-2026 11:48
//= SleepButton.jsx

//= Dependencies =//
import { useState } from 'preact/hooks';

const imagePaths = {
    default: "assets/SleepButton.png",
    hover: "assets/SleepButtonHover.png",
    pressed: "assets/SleepButtonPressed.png"
}

const SleepButton = ({ onClick }) => {
    const [buttonImg, setButtonImg] = useState(imagePaths.default);
    // const [isActive, setIsActive] = useState(true);

    return (
        <button
            onMouseEnter={() => setButtonImg(imagePaths.hover)}
            onMouseLeave={() => setButtonImg(imagePaths.default)}
            onMouseDown={() => setButtonImg(imagePaths.pressed)}
            onMouseUp={() => setButtonImg(imagePaths.hover)}
            onClick={onClick}
            id="SleepButton"
        >
            <img src={buttonImg}
                width={200} />
        </button>
    )
}

export default SleepButton;