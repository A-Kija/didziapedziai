function Number({type, count}) {

    return (
        <div className={'circle-number ' + type}>
            {count}
        </div>
    )
}

export default Number;