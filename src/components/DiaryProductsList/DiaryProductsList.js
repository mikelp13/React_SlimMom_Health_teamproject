import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './DiaryProductsList.module.css';
import DiaryProductsListItem from '../DiaryProductsListItem/DiaryProductsListItem';
import itemSelectors from '../../redux/diaryProductsListItem/itemSelectors';
import { connect } from 'react-redux';
import { getProducts } from '../../redux/diaryProductsListItem/itemOperations';

class DiaryProductsList extends Component {
    static props = {
        getProducts: PropTypes.func.isRequired,
        date: PropTypes.string,
    };

    componentDidUpdate(prevProps, prevState) { }

    render() {
        let { products } = this.props;

        return (
            <>
                <ul className={`${styles.productList} ${styles.scrollbar}`}>
                    {!!products.length &&
                        products.map(product => {
                            return (
                                <DiaryProductsListItem
                                    key={product.id}
                                    name={product.title}
                                    weight={product.weight}
                                    cal={product.kcal}
                                    productId={product.id}
                                />
                            );
                        })}
                </ul>
            </>
        );
    }
}

const mapStateToProps = state => ({
    products: itemSelectors.getProductsSelectors(state),
});

export default connect(mapStateToProps, { getProducts })(DiaryProductsList);

