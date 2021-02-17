import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { CalendarWrapper } from './DiaryDateCalendarStyle';
import IconCalendar from './IconCalendar';

const DiaryDateCalendar = () => {
    // const [state, setState] = useState({
    //     date: new Date(),
    // });

    const [startDate, setStartDate] = useState(new Date());

    // const handleChange = e => {
    //     const { name, value } = e.target;
    //     setState(prev => ({
    //         ...prev,
    //         [name]: value,
    //     }));
    // };

    return (
        <>
            <CalendarWrapper>
                <label className="labelDatePicker">
                    <DatePicker
                        selected={startDate}
                        onChange={date => setStartDate(date)}
                        dateFormat="d.MM.yyyy"
                        className="inputDiaryDateCalendar"
                    ></DatePicker>
                    <IconCalendar className="iconDateCalendar" />
                </label>
            </CalendarWrapper>
        </>
    );
};

export default DiaryDateCalendar;
