let count =0

const element = document.getElementById('root')

function onButton1Click(){
    count++;
    renderComponent()
}

function onButton2Click(){
    count--;
    renderComponent()
}

function onButton3Click(){
    count=0;
    renderComponent()
}

function renderComponent(){
    const template = (<div>
        <h1>Count: {count}</h1>
        <button onClick={onButton1Click}>+1</button>
        <button onClick={onButton2Click}>-1</button>
        <button onClick={onButton3Click}>Reset</button>
    </div>)

ReactDOM.render(template,element)
}

renderComponent()
