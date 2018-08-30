import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import LoadingIndicator from 'components/LoadingIndicator';
import './style.scss';

const UserDetailsPage = (props) => {
  const { currentUserData: { name, email } } = props;

  if (!name) {
    return <LoadingIndicator />;
  }

  return (
    <article>
      <Helmet>
        <title>Home Page</title>
        <meta
          name="description"
          content="A React.js Boilerplate application homepage"
        />
      </Helmet>
      <div className="home-page">
        <section className="centered">
          <h1>{name}</h1>
          <p>{email}</p>
        </section>
        <Link className="locks-link" to="/locks">
          <Button variant="contained" color="primary">Get Locks</Button>
        </Link>
      </div>
    </article>
  );
};

UserDetailsPage.propTypes = {
  currentUserData: PropTypes.object
};

export default UserDetailsPage;
