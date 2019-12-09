
let app = {
    title:'InDecision App',
    description: 'World of computer is awesome...',
    options:[]
}

const element = document.getElementById('root')

const onFormSubmit = (e) => {
    e.preventDefault()
    const option = e.target.elements.option.value
    if(option)
    {
        app.options.push(option)
        e.target.elements.option.value=''
        renderComponent()
    }
        
}

const removeAllOptions = () => {
    app.options = []
    renderComponent()
}

const assignAnOption = () => {
    const index = Math.floor(Math.random() * app.options.length)
    alert(app.options[index])
}

function renderComponent(){
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.description && <p>{app.description}</p>}
            <p>{(app.options && app.options.length > 0) ? 'Here follows options' : 'No options yet'}</p>
            <p>Count: {app.options && app.options.length}</p>
            <button disabled={app.options.length === 0} onClick={assignAnOption}> Get an Option</button>
            <button onClick={removeAllOptions}>Remove All</button>
            <ol>
                {
                    app.options.map(option => <li key={option}>{option}</li>)
                }
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type='text' name='option'></input>
            <button>Submit</button>
            </form>
        </div>
    )
    ReactDOM.render(template, element)
}

renderComponent()