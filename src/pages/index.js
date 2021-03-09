import React from 'react';
import {
    Switch,
    Route,
    Redirect,
} from 'react-router-dom';

import Portfolio from './Portfolio/Portfolio';
import { Navigation } from '../components';

import {
	PageContainer,
    AppContainer
} from './pageStyle.js';

const Pages = () => {
	return (
		<AppContainer>
            <Navigation />
            <PageContainer>
                <Switch>
                    <Redirect from="/" to="/portfolio" exact />
                    <Route path="/portfolio" component={Portfolio} exact />
                </Switch>
            </PageContainer>
        </AppContainer>
    );
};

export default Pages;

