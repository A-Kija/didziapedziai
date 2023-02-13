function Click() {

    // #1
    const go = () => {
        console.log('GO RED!');
    }

    // #2
    const goEvent = e => {
        console.log(e);
        console.log('GO RED!');
    }

    // #3
    const doSomething = color => {
        return () => console.log('YES ' + color);
    }

    // #4 
    const doSomething2 = color => {
        console.log('YES-2 ' + color);
    }

    return (
        <div>
            <button className="red" onClick={go}>#1</button>

            <button className="red" onClick={goEvent}>#2</button>

            <button className="coral" onClick={doSomething('coral button')}>#3 Coral</button>
            <button className="blue" onClick={doSomething('blue button')}>#3 Blue</button>

            <button className="coral" onClick={() => doSomething2('coral button')}>#4 Coral</button>
            <button className="blue" onClick={() => doSomething2('blue button')}>#4 Blue</button>

            <button className="red" onClick={() => console.log('In One Line')}>#5</button>
            <button className="red" onClick={e => console.log(e, 'In One Line')}>#6</button>
        </div>
    );
}

export default Click;