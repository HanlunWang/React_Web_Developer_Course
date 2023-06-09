'use strict';

var appRoot = document.getElementById('app');

var visible = false;

var app = {
    details: 'This is the detail'
};

var onVisible = function onVisible() {
    visible = !visible;
    renderApp();
};

var showDetails = function showDetails() {
    if (visible) {
        return React.createElement(
            'p',
            null,
            app.details
        );
    }
};

var renderApp = function renderApp() {
    var template = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            'Visibility Toggle'
        ),
        React.createElement(
            'button',
            { onClick: onVisible },
            visible ? 'Hide' : 'Show'
        ),
        showDetails()
    );

    ReactDOM.render(template, appRoot);
};

renderApp();
