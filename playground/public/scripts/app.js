'use strict';

var visibility = false;

var onButtonClick = function onButtonClick() {
    visibility = !visibility;
    render();
};

var render = function render() {

    var template = React.createElement(
        'div',
        null,
        React.createElement(
            'button',
            { onClick: onButtonClick },
            visibility ? 'Hide' : 'Show'
        ),
        visibility && React.createElement(
            'p',
            null,
            'Show this text'
        )
    );

    var element = document.getElementById('root');

    ReactDOM.render(template, element);
};

render();
