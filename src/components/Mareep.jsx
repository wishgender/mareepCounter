//= laz r
//= 02-21-2026 13:52
//= Mareep.jsx

//= Dependencies =//

const shinyOdds = 50;
const mareepSprites = [
    'bw', 'b2w2', 'c', 'dp',
    'e', 'g', 'hgss', 'oras',
    'pt', 'rs', 's', 'xy'
];

export const Mareep = ({ onFinish }) => {
    let sprite = Math.floor(Math.random() * mareepSprites.length);
    let shiny = Math.floor(Math.random() * shinyOdds);
    let spritePath = mareepSprites[sprite] + (shiny == 6 ? '_s' : '');
    console.log(spritePath)
    return (
        <>
            <div
                class={(mareepSprites[sprite] != 'dp' && mareepSprites[sprite] != 'pt') ? "mareep flip" : "mareep"}
                onAnimationEnd={onFinish}
            >
                <img src={`assets/mareepSprites/${spritePath}.png`} />
            </div>
        </>
    )
}