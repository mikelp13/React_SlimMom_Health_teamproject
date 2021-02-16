import { connect } from 'react-redux';
import React from 'react';
import styles from './DiaryProductsListItem.module.css'
import selectors from '../../redux/diaryProductsListItem/itemSelectors'
import { deleteEatenProduct } from '../../redux/diaryProductsListItem/itemOperations';




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
            <span className={styles.listWeight}>{weight}</span>
            <span className={styles.listCalories}>{cal}<span className={styles.ccal}> callories</span></span>
            <button className={styles.listButton} onClick={() => deleteProduct({ dayId, eatenProductId: productId, }, date)}> close</button>
        </li >

    )
}

const mapDispatchToProps = {
    deleteProduct: deleteEatenProduct,
}

const mapStateToProps = state => ({
    dayId: selectors.getCurrentDayId(state),
    date: selectors.getDaySummary(state).date,

})

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(DiaryProductsListItem);