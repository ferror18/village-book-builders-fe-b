import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Button from '../../common/Button';
import { Profile, Label } from '../../common/ProfileStyle';
import { Divider } from './School.styles';

const School = props => {
  const { school } = props;
  const theme = { color: '#6ac66b' };
  return (
    <Profile>
      <Label>Description</Label>
      <p>{school.school_description}</p>
      <Label>Goals:</Label>
      <p>{school.school_goals_description}</p>

      <Label>Needs:</Label>
      <p>{school.school_needs_description}</p>

      <Label>Student Count:</Label>
      <p>{school.count_students_currently_enrolled}</p>

      <Label>Teacher Count:</Label>
      <p>{school.count_teachers}</p>

      <Label>Notes:</Label>
      <p>{school.notes}</p>

      <Link to={`/headmaster/school/edit/${school.id}`}>
        <ThemeProvider theme={theme}>
          <Button buttonText="Edit School Profile" />
        </ThemeProvider>
      </Link>
      <Divider />
    </Profile>
  );
};

export default connect(null, {})(School);
