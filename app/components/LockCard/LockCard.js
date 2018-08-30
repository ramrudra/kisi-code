import React from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Lock from '@material-ui/icons/Lock';
import LockOpen from '@material-ui/icons/LockOpen';
import CircularProgress from '@material-ui/core/CircularProgress';

class LockCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false
    };
  }

  unlock = (id, name) => {
    this.setState({ loading: true });
    this.props.lockUnlock(id, name);

    setTimeout(() => this.setState({ loading: false }), 1500);
  };


  render() {
    const { lock } = this.props;
    const { loading } = this.state;

    let btnContent = (
      <Button
        variant="contained"
        size="medium"
        color="primary"
        onClick={() => this.unlock(lock.id, lock.name)}
      >
        Unlock
      </Button>
    );

    if (lock.unlocked && !loading) {
      btnContent = (
        <Button
          size="medium"
          color="primary"
        >
          Lock
        </Button>
      );
    } else if (loading) {
      btnContent = (
        <CircularProgress size={30} />
      );
    }


    return (
      <Card key={lock.id} className="locks-card">
        <CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="headline" component="h2">
              {lock.name}
            </Typography>
            {lock.unlocked ? (
              <LockOpen style={{ fontSize: 50 }} />
            ) : (
              <Lock style={{ fontSize: 50 }} />
            )}
          </CardContent>
        </CardActionArea>
        <CardActions className="actions">
          {lock.unlocked ? (
            <div>
              <Typography gutterBottom variant="body1" component="p">
                Unlocked
              </Typography>
              {btnContent}
            </div>
          ) : (
            <div>
              <Typography gutterBottom variant="body1" component="p">
                Locked
              </Typography>
              {btnContent}
            </div>
          )}
        </CardActions>
      </Card>
    );
  }
}

LockCard.propTypes = {
  lock: PropTypes.object,
  lockUnlock: PropTypes.func
};

export default LockCard;
