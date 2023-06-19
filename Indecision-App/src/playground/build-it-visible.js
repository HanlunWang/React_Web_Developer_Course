class Visible extends React.Component{
    constructor(props) {
        super(props);
        this.handleShow = this.handleShow.bind(this);
        
        this.state = {
            visible: false
        };
    }

    render() {
        return (
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.handleShow}>{this.state.visible ? 'Hide' : 'Show'}</button>
                {
                    this.state.visible && (
                        <div>
                            <p>hello</p>
                        </div>
                    ) 
                }
            </div>
        );
    }

    handleShow() {
        this.setState((prevState) => {
            return {
                visible: !prevState.visible
            };
        })
    }
}

ReactDOM.render(<Visible/>, document.getElementById('app'));




// const appRoot = document.getElementById('app');

// let visible = false;

// const app = {
//     details: 'This is the detail'
// };

// const onVisible = () => {
//     visible = !visible;
//     renderApp();
// };

// const showDetails = () => {
//     if(visible) {
//         return <p>{app.details}</p>
//     }
// }

// const renderApp = () => {
//     const template = (
//         <div>
//             <h1>Visibility Toggle</h1>
//             <button onClick={onVisible}>{visible ? 'Hide' : 'Show'}</button>
//             {
//                 showDetails()
//             }
//         </div>
        
//     );

//     ReactDOM.render(template, appRoot);
// };

// renderApp();