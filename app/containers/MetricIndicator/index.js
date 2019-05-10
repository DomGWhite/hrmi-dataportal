/**
 *
 * MetricIndicator
 *
 */

import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { compose } from 'redux';
import { Heading, Text } from 'grommet';

import { getIndicatorScores } from 'containers/App/selectors';

import { loadDataIfNeeded } from 'containers/App/actions';

import rootMessages from 'messages';
// import messages from './messages';

const DEPENDENCIES = ['countries', 'esrIndicatorScores'];

export function MetricIndicator({ onLoadData, metric, scores }) {
  useEffect(() => {
    // kick off loading of data
    onLoadData();
  }, []);

  return (
    <div>
      <Helmet>
        <title>MetricIndicator</title>
        <meta name="description" content="Description of MetricIndicator" />
      </Helmet>
      <Text>
        <FormattedMessage {...rootMessages['metric-types'].indicator} />
      </Text>
      <Heading>
        <FormattedMessage {...rootMessages.indicators[metric.key]} />
      </Heading>
      <div>Scores for countries: {scores && scores.length}</div>
    </div>
  );
}

MetricIndicator.propTypes = {
  dispatch: PropTypes.func.isRequired,
  onLoadData: PropTypes.func.isRequired,
  metric: PropTypes.object.isRequired,
  scores: PropTypes.oneOfType([PropTypes.array, PropTypes.bool]),
};

const mapStateToProps = createStructuredSelector({
  scores: (state, { metric }) => getIndicatorScores(state, metric.key),
});

export function mapDispatchToProps(dispatch) {
  return {
    onLoadData: () => {
      DEPENDENCIES.forEach(key => dispatch(loadDataIfNeeded(key)));
    },
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(MetricIndicator);
