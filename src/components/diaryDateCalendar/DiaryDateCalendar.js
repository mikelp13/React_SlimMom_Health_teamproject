import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import IconCalendar from './IconCalendar';
import { CalendarWrapper } from './DiaryDateCalendarStyle';
import moment from 'moment';
import getDayInfoOperation from '../../redux/userData/userDataOperations';
import setDataOperation from '../../redux/userData/userDataOperations';

const DiaryDateCalendar = () => {
    const [state, setState] = useState({
        date: '',
    });

    const [startDate, setStartDate] = useState(new Date());
    console.log(startDate);

    const handleChange = day => {
        setStartDate(day);
        const date = { date: moment(day).format('YYYY-MM-DD') };
        dispatch(userDataAction.getDayInfoOperation(date));
        dispatch(userDataAction.setDataOperation(date));
        console.log('current ====>>> day', day);
        console.log('current ====>>> data', date);
    };

    return (
        <>
            <CalendarWrapper>
                <label className="labelDatePicker">
                    <DatePicker
                        selected={startDate}
                        onChange={handleChange}
                        dateFormat="d.MM.yyyy"
                        className="inputDiaryDateCalendar"
                        name="data"
                    ></DatePicker>
                    <IconCalendar className="iconDateCalendar" />
                </label>
            </CalendarWrapper>
        </>
    );
};

export default DiaryDateCalendar;
