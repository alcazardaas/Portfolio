import PropTypes from 'prop-types';
import Item from './Item'

const ScheduleList = ({ scheduleList }) => {
    const listItems = scheduleList.map(i => <Item key={i.id} itemSchedule={i} />);

    return (
        <div className='row'>
            <ul className='items-list'>
                {listItems}
            </ul>
        </div>
    );
};

ScheduleList.propTypes = {
    scheduleList: PropTypes.array
};

export default ScheduleList;