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
} from './pageStyle.js';

const Pages = () => {
	return (
		<>
            <PageContainer>
                <Navigation />
                <Switch>
                    <Redirect from="/" to="/portfolio" exact />
                    <Route path="/portfolio" component={Portfolio} exact />
                </Switch>
            </PageContainer>
        </>
    );
};

export default Pages;

