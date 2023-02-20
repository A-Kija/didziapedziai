function Sq({s, setSq}) {
    return (
        <div className={'sq' + (s.spin ? ' spin' : '')} style={{
            backgroundColor:s.color + '70',
            borderColor: s.color,
            }}>
                <div className={s.spin ? 'spin-back' : ''}>
                {s.number}
                </div>
        </div>
    )
}

export default Sq;