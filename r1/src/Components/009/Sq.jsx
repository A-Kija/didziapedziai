function Sq({s, i}) {
    return (
        <div className="sq" style={{
            backgroundColor:s.color + '70',
            borderColor: s.color,
            // transform: i % 2 ? 'rotate(2deg)' : 'rotate(-2deg)'
            }}>
                {i}
        </div>
    )
}

export default Sq;