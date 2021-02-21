import styled from 'styled-components';
const NoticeWrapper = styled.div`
    z-index: 2000;
    position: fixed;
    top: 70px;
    right: 20px;
    width: 280px;
    color: var(--main-text);

    @media screen and (min-width: 768px) {
        right: 30px;
        top: 145px;
    }

    .text {
        margin: 0;
        font-size: 16px;
    }

    .successNotification {
        display: flex;
        align-items: center;
        padding: 0 20px;
        min-height: 80px;
        border-radius: 5px;
        background-color: #aff29a;

        box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
            0px 4px 5px 0px rgba(0, 0, 0, 0.14),
            0px 1px 10px 0px rgba(0, 0, 0, 0.12);
    }

    .errorNotification {
        display: flex;
        align-items: center;
        padding: 0 20px;
        min-height: 80px;
        border-radius: 5px;
        background-color: #ffaba2;

        box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
            0px 4px 5px 0px rgba(0, 0, 0, 0.14),
            0px 1px 10px 0px rgba(0, 0, 0, 0.12);
    }

    .warningNotification {
        display: flex;
        align-items: center;
        padding: 0 20px;
        min-height: 80px;
        border-radius: 5px;
        background-color: #ffff78fa;

        box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
            0px 4px 5px 0px rgba(0, 0, 0, 0.14),
            0px 1px 10px 0px rgba(0, 0, 0, 0.12);
    }
`;
export default NoticeWrapper;
