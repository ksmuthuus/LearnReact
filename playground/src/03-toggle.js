
let visibility = false


const onButtonClick = () => {
    visibility = !visibility
    render()
}

const render = () => {

    const template = (
        <div>
            <button onClick={onButtonClick}>
                {visibility ? 'Hide' :'Show'}
            </button>
            {visibility && <p>Show this text</p>}
        </div>
    )
    
    const element = document.getElementById('root')
    
    ReactDOM.render(template, element)
}

render()
