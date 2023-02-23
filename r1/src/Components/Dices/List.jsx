function List({list}) {
    return (
        <div className="list">

            {
                list.map(d => <div key={d.id} className="item">
                    <div className={'dice _' + d.number} style={{
                        fontSize: d.size + 'px',
                        color: d.color
                    }}></div>
                </div>)
            }

        </div>
    );
}

export default List;