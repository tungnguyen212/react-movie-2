import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

//style
import { Wrapper, Content } from './BreadCrump.style';

const BreadCrump = ({ movieTitle }) => (
  <Wrapper>
    <Content>
      <Link to='/'>
        <span>Home</span>
      </Link>
      <span> | </span>
      <span>{movieTitle}</span>
    </Content>
  </Wrapper>
);

BreadCrump.propTypes = {
  movieTitle: PropTypes,
};
export default BreadCrump;
