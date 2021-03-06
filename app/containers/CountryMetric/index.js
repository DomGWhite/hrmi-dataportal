/**
 *
 * CountryMetric
 *
 */

import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { injectIntl, intlShape } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { Helmet } from 'react-helmet';
import { compose } from 'redux';
import styled, { withTheme } from 'styled-components';
import { Heading, Button, Box } from 'grommet';

import rootMessages from 'messages';

import CountryMetricPeople from 'components/CountryMetricPeople';
import CountryAbout from 'components/CountryAbout';
import MetricTrend from 'components/MetricTrend';
import MetricAbout from 'components/MetricAbout';
import Close from 'containers/Close';
import TabContainer from 'containers/TabContainer';

import {
  RIGHTS,
  STANDARDS,
  BENCHMARKS,
  COLUMNS,
} from 'containers/App/constants';
import ContentContainer from 'styled/ContentContainer';

import getMetricDetails from 'utils/metric-details';

import {
  getCountry,
  getScaleSearch,
  getStandardSearch,
  getBenchmarkSearch,
  getPeopleAtRisk,
  getModalTabSearch,
  getContentByKey,
  getESRScoresForCountry,
  getCPRScoresForCountry,
  getESRIndicatorScoresForCountry,
  getHasCountryCPR,
  getAuxIndicatorsForCountry,
  getIndicatorInfo,
  getMaxYearESR,
  getMaxYearCPR,
} from 'containers/App/selectors';

import {
  navigate,
  setModalTab,
  selectCountry,
  selectMetric,
  loadContentIfNeeded,
  loadDataIfNeeded,
} from 'containers/App/actions';

const MainHeading = props => (
  <Heading level="2" margin={{ vertical: '5px' }} {...props} />
);

const StyledMainHeading = styled(MainHeading)`
  font-weight: ${({ base }) => (base ? 400 : 600)};
`;

const hasSubrights = metric => {
  const subrights = RIGHTS.filter(r => r.aggregate === metric.key);
  return subrights.length > 0;
};

const hasAnalysis = metric =>
  (metric.metricType === 'rights' && !hasSubrights(metric)) ||
  (metric.metricType === 'dimensions' && metric.key === 'esr');

const generateKey = (metricCode, countryCode) => {
  const metric = getMetricDetails(metricCode);
  if (hasAnalysis(metric)) {
    if (metric.metricType === 'rights') {
      if (metric.type === 'esr') {
        return `esr/${countryCode}`;
      }
      return `${metricCode}/${countryCode}`;
    }
    if (metric.metricType === 'dimensions' && metric.key === 'esr') {
      return `esr/${countryCode}`;
    }
  }
  return null;
};
const getColour = metric => {
  if (metric.metricType === 'dimensions') {
    return metric.key;
  }
  if (metric.metricType === 'rights') {
    return metric.dimension;
  }
  return 'esr';
};
const DEPENDENCIES = ['auxIndicators', 'atRisk', 'esrIndicators'];

export function CountryMetric({
  metricCode,
  countryCode,
  onClose,
  onSelectCountry,
  onSelectMetric,
  base,
  intl,
  atRisk,
  atRiskAnalysis,
  onLoadContent,
  scores,
  hasAtRisk,
  onCategoryClick,
  auxIndicators,
  country,
  onLoadData,
  metricInfo,
  benchmark,
  maxYearESR,
  maxYearCPR,
  theme,
}) {
  useEffect(() => {
    const key = generateKey(metricCode, countryCode);
    if (key && hasAtRisk) onLoadContent(key);
    onLoadData();
  }, []);

  const metric = getMetricDetails(metricCode);
  const currentBenchmark = BENCHMARKS.find(s => s.key === benchmark);
  const countryTitle =
    countryCode && intl.formatMessage(rootMessages.countries[countryCode]);
  const metricTitle =
    metric && intl.formatMessage(rootMessages[metric.metricType][metric.key]);
  const isESR = metric.metricType === 'indicators' || metric.type === 'esr';

  return (
    <Box overflow="auto" direction="column">
      <Helmet>
        <title>{`${countryTitle} - ${metricTitle}`}</title>
        <meta name="description" content="Description of Country Metric page" />
      </Helmet>
      <ContentContainer>
        <Close
          topRight
          onClick={() =>
            onClose(base, base === 'country' ? countryCode : metricCode)
          }
        />
        <Box direction="column" pad="medium">
          <StyledMainHeading>
            <Button
              onClick={() => {
                if (base === 'metric') {
                  onSelectCountry(countryCode);
                } else {
                  onSelectMetric(metricCode);
                }
              }}
            >
              {base === 'metric' ? countryTitle : metricTitle}
            </Button>
          </StyledMainHeading>
          <StyledMainHeading base>
            {base === 'metric' ? metricTitle : countryTitle}
          </StyledMainHeading>
        </Box>
      </ContentContainer>
      <TabContainer
        aside={false}
        modal
        tabs={[
          {
            key: 'trend',
            title: intl.formatMessage(rootMessages.tabs.trend),
            content: scores && scores.length > 0 && (
              <MetricTrend
                color={theme.global.colors[getColour(metric)]}
                scores={scores}
                percentage={isESR}
                maxValue={isESR ? 100 : 11}
                maxYear={isESR ? maxYearESR : maxYearCPR}
                column={isESR ? currentBenchmark.column : COLUMNS.CPR.MEAN}
                rangeColumns={
                  !isESR && {
                    upper: COLUMNS.CPR.HI,
                    lower: COLUMNS.CPR.LO,
                  }
                }
              />
            ),
          },
          {
            key: 'atrisk',
            title: intl.formatMessage(rootMessages.tabs['people-at-risk']),
            content: hasAtRisk && metric.metricType !== 'indicators' && (
              <CountryMetricPeople
                data={atRisk}
                metric={metric}
                atRiskAnalysis={atRiskAnalysis}
                locale={intl.locale}
                hasAnalysis={hasAnalysis(metric)}
              />
            ),
          },
          {
            key: 'about',
            title: `${intl.formatMessage(
              rootMessages.tabs.about,
            )}: ${intl.formatMessage(
              base === 'country'
                ? rootMessages[metric.metricType][metricCode]
                : rootMessages.countries[countryCode],
            )}`,
            content:
              base === 'country' ? (
                <MetricAbout
                  metric={metric}
                  metricInfo={metricInfo}
                  standard={
                    metric.metricType === 'indicators'
                      ? STANDARDS.find(s => metricInfo.standard === s.code)
                      : null
                  }
                />
              ) : (
                <>
                  {country && auxIndicators && (
                    <CountryAbout
                      country={country}
                      auxIndicators={auxIndicators}
                      onCategoryClick={onCategoryClick}
                    />
                  )}
                </>
              ),
          },
        ]}
      />
    </Box>
  );
}

CountryMetric.propTypes = {
  intl: intlShape.isRequired,
  onClose: PropTypes.func,
  onSelectMetric: PropTypes.func,
  onLoadContent: PropTypes.func,
  onLoadData: PropTypes.func,
  onSelectCountry: PropTypes.func,
  onCategoryClick: PropTypes.func,
  metricCode: PropTypes.string,
  countryCode: PropTypes.string,
  base: PropTypes.string,
  benchmark: PropTypes.string,
  maxYearESR: PropTypes.string,
  maxYearCPR: PropTypes.string,
  hasAtRisk: PropTypes.bool,
  // tabIndex: PropTypes.number,
  atRisk: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  atRiskAnalysis: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  scores: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
  auxIndicators: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
  country: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  metricInfo: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
  theme: PropTypes.object,
};

const mapStateToProps = createStructuredSelector({
  maxYearESR: state => getMaxYearESR(state),
  maxYearCPR: state => getMaxYearCPR(state),
  scale: state => getScaleSearch(state),
  standard: state => getStandardSearch(state),
  benchmark: state => getBenchmarkSearch(state),
  tabIndex: state => getModalTabSearch(state),
  atRisk: (state, { countryCode, metricCode }) =>
    getPeopleAtRisk(state, {
      country: countryCode,
      metric: metricCode,
    }),
  atRiskAnalysis: (state, { countryCode, metricCode }) =>
    getContentByKey(state, generateKey(metricCode, countryCode)),
  hasAtRisk: (state, { countryCode }) => getHasCountryCPR(state, countryCode),
  scores: (state, { countryCode, metricCode }) => {
    const metric = getMetricDetails(metricCode);
    if (metric.metricType === 'dimensions' || metric.metricType === 'rights') {
      if (metric.type === 'esr') {
        return getESRScoresForCountry(state, {
          countryCode,
          metric,
        });
      }
      return getCPRScoresForCountry(state, {
        countryCode,
        metric,
      });
    }
    if (metric.metricType === 'indicators') {
      return getESRIndicatorScoresForCountry(state, {
        countryCode,
        metric,
      });
    }
    return false;
  },
  auxIndicators: (state, { countryCode, base }) =>
    base === 'metric' && getAuxIndicatorsForCountry(state, countryCode),
  country: (state, { countryCode, base }) =>
    base === 'metric' && getCountry(state, countryCode),
  metricInfo: (state, { metricCode }) => {
    const metric = getMetricDetails(metricCode);
    if (metric.metricType === 'indicators') {
      return getIndicatorInfo(state, metric.code);
    }
    return false;
  },
});

export function mapDispatchToProps(dispatch) {
  return {
    onLoadData: () =>
      DEPENDENCIES.forEach(key => dispatch(loadDataIfNeeded(key))),
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
    onLoadContent: path => {
      dispatch(loadContentIfNeeded(path, 'atrisk'));
    },
    onTabClick: index => dispatch(setModalTab(index)),
    onSelectCountry: country => dispatch(selectCountry(country)),
    onSelectMetric: metric => dispatch(selectMetric(metric)),
    onClose: (base, code) =>
      dispatch(
        navigate(
          {
            pathname: `/${base}/${code}`,
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

export default compose(withConnect)(injectIntl(withTheme(CountryMetric)));
