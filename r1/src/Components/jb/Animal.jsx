import rand from '../../Functions/rand';
import ShowName from './ShowName';

function Animal({color, animalName, h1Class}) {

    const fontFamily = 'monospace';

    return (
        <h1 className={'old-class ' + h1Class} style={{
            color,
            padding: '8px 30px',
            fontSize: rand(20, 50) + 'px',
            letterSpacing: rand(0, 1) ? '5px' : null,
        }}>*<ShowName animalName={animalName} fontFamily={fontFamily} />* No: {

            rand(11, 15)

        }</h1>
    )
}

export default Animal;