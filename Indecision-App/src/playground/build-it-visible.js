const appRoot = document.getElementById('app');

let visible = false;

const app = {
    details: 'This is the detail'
};

const onVisible = () => {
    visible = !visible;
    renderApp();
};

const showDetails = () => {
    if(visible) {
        return <p>{app.details}</p>
    }
}

const renderApp = () => {
    const template = (
        <div>
            <h1>Visibility Toggle</h1>
            <button onClick={onVisible}>{visible ? 'Hide' : 'Show'}</button>
            {
                showDetails()
            }
        </div>
        
    );

    ReactDOM.render(template, appRoot);
};

renderApp();