import React, { useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';
import { useDispatch } from 'react-redux';
import 'react-datepicker/dist/react-datepicker.css';
import IconCalendar from './IconCalendar';
import moment from 'moment';
import { CalendarWrapper } from './DiaryDateCalendarStyle';
import { getDayInfoOperation } from '../../redux/diary/diaryOperations';
import diaryActions from '../../redux/diary/diaryActions';


const DiaryDateCalendar = () => {
    const dispatch = useDispatch();
    const [startDate, setStartDate] = useState(new Date());

    useEffect(() => {
        dispatch(
            diaryActions.setCurrentDay(moment(new Date()).format('YYYY-MM-DD')),
        );
    }, [dispatch]);

    const handleChange = day => {
        setStartDate(day);
        const date = { date: moment(day).format('YYYY-MM-DD') };
        
        dispatch(diaryActions.setCurrentDay(date.date));
        dispatch(getDayInfoOperation(date));
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
