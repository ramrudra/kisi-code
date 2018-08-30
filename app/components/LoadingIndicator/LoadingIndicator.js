import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import './style.scss';

const styles = theme => ({
  progress: {
    margin: theme.spacing.unit * 2,
  },
});

const LoadingIndicator = () => (
  <div className="loading-indicator">
    <CircularProgress size={50} />
  </div>
);

export default withStyles(styles)(LoadingIndicator);
