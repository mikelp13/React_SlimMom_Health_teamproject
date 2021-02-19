import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import authSelectors from '../../redux/auth/authSelectors';

import { hideNoticeMessage } from '../../redux/notice/noticeActions';
import { getNoticeMessage } from '../../redux/notice/noticeSelectors';

import NoticeWrapper from './NoticeStyled';

const Notice = () => {
    const message = useSelector(getNoticeMessage);
    const isError = useSelector(authSelectors.getError);
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

    return (
        <NoticeWrapper>
            <div className={isError ? 'errorNotification' : 'notification'}>
                <p className="text">{message}</p>
            </div>
        </NoticeWrapper>
    );
};

export default Notice;
