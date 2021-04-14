import React from 'react';
import PropTypes from 'prop-types';
import ScheduleList from '../components/schedule/ScheduleList';
import data from '../DB/burndata';

const Schedule = props => {
    return (
        <div className="container schedule-reservation">
            <ScheduleList scheduleList={data.SCHEDULES}></ScheduleList>
        </div>
    );
};

Schedule.propTypes = {
    prop: PropTypes.string
};

export default Schedule;