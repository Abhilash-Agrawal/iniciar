import React from 'react';
import PropTypes from 'prop-types';

const ProgramListItem = ({ program }) => (
  <div className="programs-item">
    <img src={program.links.mission_patch} alt="img" className="program-image" />
    <span>
      {program.mission_name}: {program.flight_number}
    </span>
    <span>
      Mission ID: {program.mission_id}
    </span>
    <span>
      Launch Year: {program.launch_year}
    </span>
    <span>
      Successful Launch: {program.launch_success ? 'true' : 'false'}
    </span>
    <span>
      Successful Landing: {program.rocket.first_stage.cores[0].land_success ? 'true' : 'false'}
    </span>
  </div>
);

ProgramListItem.propTypes = {
  program: PropTypes.object,
};

export default ProgramListItem;
