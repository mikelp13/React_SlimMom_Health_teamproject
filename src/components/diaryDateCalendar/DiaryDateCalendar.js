import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import IconCalendar from './IconCalendar';
import { CalendarWrapper } from './DiaryDateCalendarStyle';
import moment from 'moment';

const DiaryDateCalendar = () => {
    const [state, setState] = useState({
        date: new Date(),
    });

    const [startDate, setStartDate] = useState(new Date());
    console.log(startDate);
    const handleChange = e => {
        const { name, value } = e.target;
        setState(prev => ({ ...prev, [name]: value }));
    };

    const getCurrentDay = () => {
        let date = new Date();
        let year = date.getFullYear();
        let month =
            date.getMonth().length > 1
                ? date.getMonth() + 1
                : '0' + (date.getMonth() + 1);
        let day = date.getDate();
        let currentDate = `${year}-${month}-${day}`;
        let currentDateFormat = moment(currentDate).format('DD.MM.YYYY');
        console.log(currentDateFormat);
        return currentDateFormat;
    };

    return (
        <>
            <CalendarWrapper>
                <label className="labelDatePicker">
                    <DatePicker
                        selected={startDate}
                        onChange={date => setStartDate(date)}
                        dateFormat="dd.MM.yyyy"
                        className="inputDiaryDateCalendar"
                    ></DatePicker>
                    <input
                        type="date"
                        name="date"
                        value={(state.date = getCurrentDay())}
                        onChange={handleChange}
                    />
                    <IconCalendar className="iconDateCalendar" />
                </label>
            </CalendarWrapper>
        </>
    );
};

export default DiaryDateCalendar;
