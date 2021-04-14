import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Item = ({ itemSchedule }) => {
    const [itemReserved, setItemReserved] = useState(itemSchedule);

    const handleChange = () => {
        setItemReserved({ ...itemReserved, reserved: !itemReserved.reserved })
    }

    return (
        <li onClick={() => handleChange()} className={itemReserved.reserved ? 'item reserved' : 'item'}>{itemReserved.time}</li>
    );
};

Item.propTypes = {
    itemSchedule: PropTypes.object
};

export default Item;