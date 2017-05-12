import { StaticRouter } from 'react-router-dom';
import express from 'express';
import React from 'react';
import { Provider } from 'react-redux';

import App from 'App';
import render from './render';
import { configure } from 'store/configureStore';

const PORT = process.env.PORT || 3000;

const initialState = {}

const app = express();
app.use('/static', express.static('./dist'));

app.get('*', (req, res) => {

    const context = {}
    const store = configure(initialState);

    res.status(200).send(render(
        <Provider store={store} >
            <StaticRouter context={context} location={req.url}>
                <App />
            </StaticRouter>
        </Provider>
    ));
});

app.listen(PORT, () => console.log(`App Is Listening On Port ${PORT}`));
