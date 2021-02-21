import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useRouteMatch, useHistory } from 'react-router-dom';
import {
    getProductOperation,
    addProductOperation,
} from '../../redux/diary/diaryOperations';
import diarySelectors from '../../redux/diary/diarySelectors';
import { DiaryFormWrapper } from './DiaryAddProductFormStyle';
import useWindowSize from '../../hooks/useWindowSize';
// import { useFormik } from 'formik';
// import * as Yup from 'yup';

const DiaryAddProductForm = () => {
    const [state, setState] = useState({
        date: '',
        productName: '',
        weight: '',
        productId: '',
    });

    const [typeError, setTypeError] = useState('')

    const date = useSelector(diarySelectors.getDate);

    const products = useSelector(diarySelectors.getDayProducts);
    const dispatch = useDispatch();
    const debounce = require('debounce');
    const size = useWindowSize();
    const location = useLocation();
    const match = useRouteMatch();
    const history = useHistory();


    const handleChange = e => {
        const { name, value } = e.target;
        const { productName, weight } = state;

        productName && weight && setTypeError('');
     
        setState(prev => ({ ...prev, [name]: value }));
        if (products.some(product => product.title.ru.includes(value))) {
            setState(prev => ({
                ...prev,
                productId: products.find(product => {
                    return product.title.ru === value;
                })?._id,
            }));
        } else {
            name === 'productName' &&
                debounce(
                    dispatch(getProductOperation(productName)),
                    1500,
                );
        }
    };

    const handleClick = e => {
        setState(prev => ({ ...prev, productId: e.target.id }));
    };

    const handleSubmit = e => {
        e.preventDefault();
        
        const { productName, weight, productId} = state;

        if (productName === '' || weight === '') {
          setTypeError("Внесены не все данные. Пожалуйста, заполните все поля")
          return
        }

        if (isNaN(Number(weight))) {
          setTypeError("Некорректный ввод. Используйте только числа")
          return
        }

        dispatch(addProductOperation(date, productId, weight));
        setState({
            date: '',
            productName: '',
            weight: '',
        });
        (location.pathname === "/diary/product") && history.goBack();
    };

    return (
        <DiaryFormWrapper>
            {(size.width > 768 ||
                location.pathname === `${match.url}/product`) && (
                <form onSubmit={handleSubmit} className="formDairyAddProduct">
                    <div className="inputBlockDairyAddProduct">
                        <input
                            list="browsers"
                            type="text"
                            name="productName"
                            value={state.productName}
                            onChange={handleChange}
                            placeholder="Введите название продукта"
                            className="inputDairyAddProduct"
                            id="fav"
                            autoComplete="off"
                        />

                        <datalist id="browsers" className="dataList">
                            {products.map(product => (
                                <option
                                    className="dataOption"
                                    key={product._id}
                                    id={product._id}
                                    value={product.title.ru}
                                    onClick={handleClick}
                                >
                                    {product.title.ru}
                                </option>
                            ))}
                        </datalist>
                        <label>
                            <input
                                type="text"
                                name="weight"
                                value={state.weight}
                                onChange={handleChange}
                                placeholder="Граммы"
                                className="inputDairyAddProduct secondInputLength"
                            />
                        </label>
                        {size.width < 768 && typeError && <p className="diaryFormError">{typeError}</p>}
                        <button type="submit" className="buttonDairyAddProduct">
                            {size.width < 768 ? 'Добавить' : '+'}
                        </button>
                    </div>
                        {size.width > 767 && typeError && <p className="diaryFormError">{typeError}</p>}
                </form>
            )}
        </DiaryFormWrapper>
    );
};

export default DiaryAddProductForm;

// const {
//   handleSubmit,
//   handleChange,
//   values,
//   errors,
//   field,
//   touched,
// } = useFormik({
//   initialValues: {
//       productName: '',
//       weight: '',
//   },
//   validationSchema,
//   onSubmit(values) {
//       console.log(values);
//   },

//   onChange(values) {
//     handleChange()
//   },
// });

// const regex = /[А-ЯЄI][а-яєi]+/g;
    
// const validationSchema = Yup.object({
//     productName: Yup.string()
//     .typeError('Ошибка ввода')
//     .required('Введите продукт').matches(regex, 'Ошибка ввода'),
 

//     weight: Yup.number()
//         .typeError('Должно быть числом')
//         .required('Введите вес')
//         .positive()
//         .integer(),
// });

// <form onSubmit={handleSubmit} className="formDairyAddProduct">
// <div className="inputBlockDairyAddProduct">
//     <input
//         list="browsers"
//         type="text"
//         name="productName"
//         value={state.productName}
//         onChange={handleChange}
//         placeholder="Введите название продукта"
//         className="inputDairyAddProduct"
//         id="fav"
//         autoComplete="off"
//     />
//     <datalist id="browsers">
//         {products.map(product => (
//             <option
//                 key={product._id}
//                 id={product._id}
//                 value={product.title.ru}
//                 onClick={handleClick}
//             >
//                 {product.title.ru}
//             </option>
//         ))}
//     </datalist>

//     <label>
//         <input
//             type="text"
//             name="weight"
//             value={state.weight}
//             onChange={handleChange}
//             placeholder="Граммы"
//             className="inputDairyAddProduct secondInputLength"
//         />
//     </label>
// </div>
// <button type="submit" className="buttonDairyAddProduct">
//     {size.width < 768 ? 'Добавить' : '+'}
// </button>
// </form>
// const handleChange = e => {
//   const { name, value } = e.target;
//   setState(prev => ({ ...prev, [name]: value }));
//   if (products.some(product => product.title.ru.includes(value))) {
//       setState(prev => ({
//           ...prev,
//           productId: products.find(product => {
//               return product.title.ru === value;
//           })?._id,
//       }));
//   } else {
//       name === 'productName' &&
//           debounce(
//               dispatch(getProductOperation(state.productName)),
//               1500,
//           );
//   }
// };

// const handleClick = e => {
//   setState(prev => ({ ...prev, productId: e.target.id }));
// };

// const handleSubmit = e => {
//   e.preventDefault();
//   dispatch(addProductOperation(date, state.productId, state.weight));
//   setState({
//       date: '',
//       productName: '',
//       weight: '',
//   });
//   (location.pathname === "/diary/product") && history.goBack();
// };

