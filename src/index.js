import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// import store from './store/index'
// import { rootReducer } from './reducers/index'
// import { createStore } from 'redux'




// const store = createStore(
//    rootReducer, /* preloadedState, */
//    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
//  );
//const store = createStore(rootReducer)

// ReactDOM.render(<Provider store={store}>
//                     <MainComponent />
//                 </Provider>,
//     document.getElementById('app')
// )


class TestComponent extends Component{
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <div>TestComponent</div>
        )
    }

}

ReactDOM.render(
  <TestComponent />,
  document.getElementById('app')
)
// import './css/style.css';
