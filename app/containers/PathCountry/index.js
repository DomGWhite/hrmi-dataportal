/**
 *
 * Country
 *
 */

import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { injectIntl, intlShape, FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Box, Text, Button, Layer } from 'grommet';

import rootMessages from 'messages';

import CountryMetric from 'containers/CountryMetric';
import Close from 'containers/Close';
import CountryReport from 'components/CountryReport';
import CountryPeople from 'components/CountryPeople';
import CountryAbout from 'components/CountryAbout';
import TabContainer from 'containers/TabContainer';

import ContentWrap from 'styled/ContentWrap';
import ContentContainer from 'styled/ContentContainer';
import PageTitle from 'styled/PageTitle';

import {
  getDimensionsForCountry,
  getRightsForCountry,
  getIndicatorsForCountry,
  getCountry,
  getScaleSearch,
  getStandardSearch,
  getBenchmarkSearch,
  getPeopleAtRiskForCountry,
  getDimensionAverages,
  getAuxIndicatorsForCountry,
} from 'containers/App/selectors';

import { loadDataIfNeeded, navigate, setTab } from 'containers/App/actions';

import { INCOME_GROUPS } from 'containers/App/constants';
import quasiEquals from 'utils/quasi-equals';
import { hasCPR } from 'utils/scores';

const HeaderCategories = styled(Box)``;
const CategoryLink = styled(Button)``;

const DEPENDENCIES = [
  'countries',
  'cprScores',
  'esrScores',
  'esrIndicatorScores',
  'esrIndicators',
  'atRisk',
  'auxIndicators',
];

export function PathCountry({
  intl,
  onLoadData,
  onCategoryClick,
  match,
  dimensions,
  rights,
  indicators,
  country,
  scale,
  benchmark,
  atRisk,
  onMetricClick,
  onCloseMetricOverlay,
  onAtRiskClick,
  standard,
  dimensionAverages,
  auxIndicators,
}) {
  useEffect(() => {
    // kick off loading of data
    onLoadData();
  }, []);
  const countryCode = match.params.country;

  const group =
    country &&
    INCOME_GROUPS.find(g => quasiEquals(g.value, country.high_income_country));

  const countryTitle =
    countryCode && intl.formatMessage(rootMessages.countries[countryCode]);

  return (
    <ContentWrap>
      <Helmet>
        <title>{countryTitle}</title>
        <meta name="description" content="Description of Country page" />
      </Helmet>
      {match.params.metric && (
        <Layer
          full
          margin="large"
          onEsc={() => onCloseMetricOverlay(countryCode)}
          onClickOutside={() => onCloseMetricOverlay(countryCode)}
        >
          <CountryMetric
            metricCode={match.params.metric}
            countryCode={countryCode}
            base="country"
          />
        </Layer>
      )}
      <ContentContainer direction="column" paddingTop>
        <Close topRight />
        <HeaderCategories direction="row">
          <Text size="small">
            <CategoryLink
              onClick={() => onCategoryClick('region', country.region_code)}
            >
              {country && (
                <FormattedMessage
                  {...rootMessages.regions[country.region_code]}
                />
              )}
            </CategoryLink>
            <Text>&nbsp;|&nbsp;</Text>
            <CategoryLink onClick={() => onCategoryClick('income', group.key)}>
              {group && (
                <FormattedMessage {...rootMessages.income[group.key]} />
              )}
            </CategoryLink>
          </Text>
        </HeaderCategories>
        <PageTitle>{countryTitle}</PageTitle>
      </ContentContainer>
      <TabContainer
        tabs={[
          {
            key: 'report',
            title: intl.formatMessage(rootMessages.tabs.report),
            content: (
              <CountryReport
                countryTitle={countryTitle}
                dimensions={dimensions}
                rights={rights}
                indicators={indicators}
                country={country}
                scale={scale}
                benchmark={benchmark}
                atRiskData={atRisk}
                standard={standard}
                reference={dimensionAverages}
                onAtRiskClick={() => onAtRiskClick()}
                onMetricClick={(metric, tab) =>
                  onMetricClick(countryCode, metric, tab)
                }
              />
            ),
          },
          {
            key: 'atrisk',
            title: intl.formatMessage(rootMessages.tabs['people-at-risk']),
            content: hasCPR(dimensions) && (
              <CountryPeople
                data={atRisk}
                countryTitle={countryTitle}
                countryCode={countryCode}
              />
            ),
          },
          {
            key: 'about',
            title: intl.formatMessage(rootMessages.tabs.about),
            content: (
              <CountryAbout
                country={country}
                auxIndicators={auxIndicators}
                onCategoryClick={onCategoryClick}
              />
            ),
          },
        ]}
      />
    </ContentWrap>
  );
}

PathCountry.propTypes = {
  // dispatch: PropTypes.func.isRequired,
  intl: intlShape.isRequired,
  onLoadData: PropTypes.func.isRequired,
  onCategoryClick: PropTypes.func,
  onMetricClick: PropTypes.func,
  onAtRiskClick: PropTypes.func,
  onCloseMetricOverlay: PropTypes.func,
  match: PropTypes.object,
  atRisk: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
  indicators: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  rights: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  dimensions: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  dimensionAverages: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  country: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  scale: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  standard: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  benchmark: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  auxIndicators: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
};

const mapStateToProps = createStructuredSelector({
  country: (state, { match }) => getCountry(state, match.params.country),
  indicators: (state, { match }) =>
    getIndicatorsForCountry(state, match.params.country),
  rights: (state, { match }) =>
    getRightsForCountry(state, match.params.country),
  dimensions: (state, { match }) =>
    getDimensionsForCountry(state, match.params.country),
  atRisk: (state, { match }) => getPeopleAtRiskForCountry(state, match.params),
  scale: state => getScaleSearch(state),
  standard: state => getStandardSearch(state),
  benchmark: state => getBenchmarkSearch(state),
  dimensionAverages: state => getDimensionAverages(state),
  auxIndicators: (state, { match }) =>
    getAuxIndicatorsForCountry(state, match.params.country),
});

export function mapDispatchToProps(dispatch) {
  return {
    onLoadData: () => {
      DEPENDENCIES.forEach(key => dispatch(loadDataIfNeeded(key)));
    },
    onCategoryClick: (key, value) => {
      const deleteParams = ['income', 'region', 'assessed'];
      dispatch(
        navigate(
          { pathname: '', search: `?${key}=${value}` },
          {
            replace: false,
            deleteParams: deleteParams.filter(p => p !== key),
          },
        ),
      );
    },
    onClose: () => dispatch(navigate('')),
    onMetricClick: (country, metric, tab = 0) =>
      dispatch(
        navigate(
          {
            pathname: `/country/${country}/${metric}`,
            search: `?mtab=${tab}`,
          },
          {
            replace: false,
          },
        ),
      ),
    onAtRiskClick: () => {
      window.scrollTo(0, 0);
      return dispatch(setTab(1));
    },
    onCloseMetricOverlay: country =>
      dispatch(
        navigate(
          {
            pathname: `/country/${country}`,
          },
          {
            replace: false,
            deleteParams: ['mtab'],
          },
        ),
      ),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(injectIntl(PathCountry));
