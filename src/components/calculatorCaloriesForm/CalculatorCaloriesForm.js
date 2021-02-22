import { useDispatch, useSelector } from 'react-redux';
import authSelectors from '../../redux/auth/authSelectors';
import * as Yup from 'yup';
import { Formik, Form, Field } from 'formik';
import {
    dailyRateAuthOperation,
    dailyRateOperation,
} from '../../redux/dailyRate/dailyRateOperations';

import { FormContainer } from './CalculatorCaloriesFormStyled';
import Modal from '../modal/Modal';
import useModal from '../modal/useModal';
import dailyRateSelectors from '../../redux/dailyRate/dailyRateSelectors';

const CalculatorCaloriesForm = () => {
    const userId = useSelector(authSelectors.getUserId);
    const userData = useSelector(dailyRateSelectors.getUserData);
    const isAuth = useSelector(authSelectors.isAuthenticated);
    const dispatch = useDispatch();
    const { openModal, onHandelClick } = useModal();

    const initialState = {
        height: userData && userData.height ? userData.height : '',
        age: userData && userData.age ? userData.age : '',
        weight: userData && userData.weight ? userData.weight : '',
        desiredWeight:
            userData && userData.desiredWeight ? userData.desiredWeight : '',
        bloodType:
            userData && userData.bloodType ? userData.bloodType.toString() : '',
    };

    const handleSubmit = values => {
        const convertedValuesArr = Object.entries(values).map(item => [
            item[0],
            Number(item[1]),
        ]);
        const valuesNumObj = Object.fromEntries(convertedValuesArr);

        isAuth
            ? dispatch(dailyRateAuthOperation(valuesNumObj, userId))
            : dispatch(dailyRateOperation(valuesNumObj));

        !isAuth && onHandelClick();
    };
    const validationSchema = Yup.object().shape({
        height: Yup.number()
            .typeError('Введено не число')
            .min(100, 'Минимальное значение 100 см')
            .max(250, 'Максимальное значение 250 см')
            .required('Обязательное поле'),

        age: Yup.number()
            .typeError('Введено не число')
            .min(18, 'Минимум 18 лет')
            .max(100, 'Максимум 100 лет')
            .required('Обязательное поле'),

        weight: Yup.number()
            .typeError('Введено не число')
            .min(20, 'Минимальный вес 20 кг')
            .max(500, 'Максимальный вес 500 кг')
            .required('Обязательное поле'),

        desiredWeight: Yup.number()
            .typeError('Введено не число')
            .min(20, 'Минимальный вес 20 кг')
            .max(500, 'Максимальный вес 500 кг')
            .required('Обязательное поле')
            .when('weight', (weight, schema) => {
                return schema.test({
                    test: desiredWeight => weight && desiredWeight < weight,
                    message: 'Желаемый вес должен быть меньше текущего',
                });
            }),

        bloodType: Yup.number().required('Выберите группу крови'),
    });

    return (
        <FormContainer>
            <Formik
                enableReinitialize={true}
                initialValues={initialState}
                onSubmit={values => {
                    handleSubmit(values);
                }}
                validationSchema={validationSchema}
            >
                {({ errors, touched }) => (
                    <Form className="caloriesForm">
                        <div className="caloriesFormInputWrapper">
                            <div className="caloriesFormInputContainer">
                                <label className="caloriesFormLabel">
                                    Рост *
                                    <Field
                                        className={`caloriesFormInput ${
                                            touched.height &&
                                            errors.height &&
                                            'caloriesFormInputError'
                                        }`}
                                        placeholder=" "
                                        name="height"
                                        type="text"
                                        min="100"
                                        max="250"
                                    />
                                    {touched.height && errors.height && (
                                        <div className="caloriesFormError">
                                            {errors.height}
                                        </div>
                                    )}
                                </label>

                                <label className="caloriesFormLabel">
                                    Возраст *
                                    <Field
                                        className={`caloriesFormInput ${
                                            touched.height &&
                                            errors.height &&
                                            'caloriesFormInputError'
                                        }`}
                                        placeholder=" "
                                        name="age"
                                        type="text"
                                        min="18"
                                        max="100"
                                    />
                                    {touched.age && errors.age && (
                                        <div className="caloriesFormError">
                                            {errors.age}
                                        </div>
                                    )}
                                </label>
                                <label className="caloriesFormLabel">
                                    Текущий вес *
                                    <Field
                                        className={`caloriesFormInput ${
                                            touched.height &&
                                            errors.height &&
                                            'caloriesFormInputError'
                                        }`}
                                        placeholder=" "
                                        name="weight"
                                        type="text"
                                        min="20"
                                        max="500"
                                    />
                                    {touched.weight && errors.weight && (
                                        <div className="caloriesFormError">
                                            {errors.weight}
                                        </div>
                                    )}
                                </label>
                            </div>
                            <div className="caloriesFormInputContainer">
                                <label className="caloriesFormLabel">
                                    Желаемый вес *
                                    <Field
                                        className={`caloriesFormInput ${
                                            touched.height &&
                                            errors.height &&
                                            'caloriesFormInputError'
                                        }`}
                                        placeholder=" "
                                        name="desiredWeight"
                                        type="text"
                                        min="20"
                                        max="500"
                                    />
                                    {touched.desiredWeight &&
                                        errors.desiredWeight && (
                                            <div className="caloriesFormError">
                                                {errors.desiredWeight}
                                            </div>
                                        )}
                                </label>
                                <div className="caloriesFormRadioContainer">
                                    <p className="caloriesFormRadioTitle">
                                        Группа крови *
                                    </p>

                                    {touched.bloodType && errors.bloodType && (
                                        <div className="caloriesFormRadioError">
                                            {errors.bloodType}
                                        </div>
                                    )}

                                    <label className="radioButton">
                                        <Field
                                            type="radio"
                                            name="bloodType"
                                            value="1"
                                        />
                                        <span className="labelVisible">
                                            <span className="fakeRadioButton"></span>
                                            1
                                        </span>
                                    </label>
                                    <label className="radioButton">
                                        <Field
                                            type="radio"
                                            name="bloodType"
                                            value="2"
                                        />
                                        <span className="labelVisible">
                                            <span className="fakeRadioButton"></span>
                                            2
                                        </span>
                                    </label>
                                    <label className="radioButton">
                                        <Field
                                            type="radio"
                                            name="bloodType"
                                            value="3"
                                        />
                                        <span className="labelVisible">
                                            <span className="fakeRadioButton"></span>
                                            3
                                        </span>
                                    </label>
                                    <label className="radioButton">
                                        <Field
                                            type="radio"
                                            name="bloodType"
                                            value="4"
                                        />
                                        <span className="labelVisible">
                                            <span className="fakeRadioButton"></span>
                                            4
                                        </span>
                                    </label>
                                </div>
                            </div>
                        </div>
                        <button className="mainButton" type="submit">
                            Похудеть
                        </button>
                        <Modal
                            openModal={openModal}
                            onHandelClick={onHandelClick}
                        />
                    </Form>
                )}
            </Formik>
        </FormContainer>
    );
};

export default CalculatorCaloriesForm;
