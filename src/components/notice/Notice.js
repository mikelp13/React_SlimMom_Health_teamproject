import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { hideNoticeMessage } from '../../redux/notice/noticeActions';
import {
    getNoticeMessage,
    getNoticeResponse,
} from '../../redux/notice/noticeSelectors';

import NoticeWrapper from './NoticeStyled';

const Notice = () => {
    const message = useSelector(getNoticeMessage);
    const response = useSelector(getNoticeResponse);
    const dispatch = useDispatch();

    useEffect(() => {
        const idTimeout = setTimeout(() => {
            dispatch(hideNoticeMessage());
        }, 3000);

        return () => {
            clearTimeout(idTimeout);
        };
        // eslint-disable-next-line
    }, []);

    const getTypeNotice = () => {
        switch (response) {
            case 'error':
                return 'errorNotification';
            case 'success':
                return 'successNotification';

            default:
                return 'warningNotification';
        }
    };

    return (
        <NoticeWrapper>
            <div className={getTypeNotice()}>
                <p className="text">{message}</p>
            </div>
        </NoticeWrapper>
    );
};

export default Notice;
