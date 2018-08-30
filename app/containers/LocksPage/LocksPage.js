import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Lock from '@material-ui/icons/Lock';
import LockOpen from '@material-ui/icons/LockOpen';
import LoadingIndicator from 'components/LoadingIndicator';
import './style.scss';

class LocksPage extends React.Component {
  componentDidMount() {
    this.props.onGetUserLocks();
  }

  lockUnlock = (id) => this.props.onLockUnlockRequest(id);

  render() {
    const { locks, currentUser } = this.props;

    if (!currentUser.name) {
      return <LoadingIndicator />;
    }

    return (
      <div className="locks-page">
        <Helmet>
          <title>Locks Page</title>
          <meta
            name="description"
            content="Locks Page to list current user locks"
          />
        </Helmet>
        <h1>{currentUser.name ? `${currentUser.name}'s` : ''} Locks</h1>
        <div className="locks-list-wrapper">
          {locks.map((l) => (
            <Card key={l.id} className="locks-card">
              <CardActionArea>
                <CardContent>
                  <Typography gutterBottom variant="headline" component="h2">
                    {l.name}
                  </Typography>
                  {l.unlocked ? (
                    <LockOpen style={{ fontSize: 50 }} />
                  ) : (
                    <Lock style={{ fontSize: 50 }} />
                  )}
                </CardContent>
              </CardActionArea>
              <CardActions className="actions">
                {l.unlocked ? (
                  <Button size="medium" color="primary">
                    Unlocked
                  </Button>
                ) : (
                  <Button
                    variant="contained"
                    size="medium"
                    color="primary"
                    onClick={() => this.lockUnlock(l.id)}
                  >
                    Unlock
                  </Button>
                )}
              </CardActions>
            </Card>
          ))}
        </div>
      </div>
    );
  }
}

LocksPage.propTypes = {
  onGetUserLocks: PropTypes.func,
  locks: PropTypes.any,
  onLockUnlockRequest: PropTypes.func,
  currentUser: PropTypes.object
};

export default LocksPage;
