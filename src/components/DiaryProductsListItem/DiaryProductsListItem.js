import { connect } from 'react-redux';
import React from 'react';
import styles from './DiaryProductsListItem.module.css'
import itemSelectors from '../../redux/diaryProductsListItem/itemSelectors'
import { deleteEatenProduct } from '../../redux/diaryProductsListItem/itemOperations';
import IconClose from './closeBtn/close';




const DiaryProductsListItem = ({
    name,
    cal,
    weight,
    dayId,
    productId,
    deleteProduct,
    date
}) => {
    return (

        <li className={styles.listItem}>
            <span className={styles.listName}>{name}</span>
            <span className={styles.listWeight}>{weight} г</span>
            <span className={styles.listCalories}>
                {Math.round(cal)} <span className={styles.ccal}>ккал</span>
            </span>
            <button
                className={styles.listButton}
                onClick={() =>
                    deleteProduct(
                        {
                            dayId,
                            eatenProductId: productId,
                        },
                        date,
                    )
                }
            >
                <IconClose />
            </button>
        </li >

    )
}

const mapDispatchToProps = {
    deleteProduct: deleteEatenProduct,
}

const mapStateToProps = state => ({
    dayId: itemSelectors.getCurrentDayId(state),
    date: itemSelectors.getDaySummary(state).date,


    // ========================= for test ===========================


})

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(DiaryProductsListItem);