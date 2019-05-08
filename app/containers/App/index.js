/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { compose } from 'redux';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';

import { useInjectSaga } from 'utils/injectSaga';

import Header from 'containers/Header/Loadable';
import Overview from 'containers/Overview/Loadable';
import Metric from 'containers/Metric/Loadable';
import Country from 'containers/Country/Loadable';
import Page from 'containers/Page/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';

import { loadDataIfNeeded } from './actions';
import { BREAKPOINTS } from './constants';

import saga from './saga';

import { DEFAULT_LOCALE } from '../../i18n';

import GlobalStyle from '../../global-styles';

const DEPENDENCIES = [
  'countries',
  'cprScores',
  'esrScores',
  'esrIndicatorScores',
];

const AppWrapper = styled.div`
  &:focus {
    outline: none;
  }
`;

const Main = styled.main`
  padding-top: 70px;
  min-height: 100vh;
  @media (min-width: ${props => props.theme.breakpoints[BREAKPOINTS.SMALL]}) {
    padding-top: 100px;
  }
  &:focus {
    outline: none;
  }
`;

/**
 * routes: /[locale] +
 * overview: /?scale=:scale&standard=:standard&benchmark=:benchmark&region=:region&income=:income&cpr=:cpr
 * metric view: /metric/:metric?standard=:standard&benchmark=:benchmark&region=:region&income=:income&cpr=:cpr
 * country view: /country/:country?scale=:scale&standard=:standard&benchmark=:benchmark&view=:view
 * page view: /page/:page
 *
 */

export function App({ match, onLoadData }) {
  const locale = match.params ? match.params.locale : DEFAULT_LOCALE;

  useInjectSaga({ key: 'app', saga });

  useEffect(() => {
    // kick off loading of data
    onLoadData();
  }, []);

  return (
    <AppWrapper>
      <Helmet
        titleTemplate="%s - HRMI Data Portal v.2"
        defaultTitle="HRMI Data Portal v.2"
      >
        <meta
          name="description"
          content="Human Rights Measurement Initiative"
        />
      </Helmet>
      <Header />
      <Main>
        <Switch>
          <Route exact path={`/${locale}`} component={Overview} />
          <Route
            path={`/${locale}/metric/:metric/:country?`}
            component={Metric}
          />
          <Route
            path={`/${locale}/country/:country/:metric?`}
            component={Country}
          />
          <Route path={`/${locale}/page/:page`} component={Page} />
          <Route path={`/${locale}`} component={NotFoundPage} />
        </Switch>
      </Main>
      <GlobalStyle />
    </AppWrapper>
  );
}

App.propTypes = {
  match: PropTypes.object,
  onLoadData: PropTypes.func,
};

export function mapDispatchToProps(dispatch) {
  return {
    onLoadData: () => {
      DEPENDENCIES.forEach(key => dispatch(loadDataIfNeeded(key)));
    },
  };
}

const withConnect = connect(
  null,
  mapDispatchToProps,
);

export default compose(withConnect)(App);