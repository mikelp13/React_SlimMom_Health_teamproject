import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import authSelectors from '../../redux/auth/authSelectors';
import {
    dailyRateAuthOperation,
    dailyRateOperation,
} from '../../redux/dailyRate/dailyRateOperations';
// styles
import { FormContainer } from './CalculatorCaloriesFormStyled';

const initialState = {
    height: '',
    age: '',
    weight: '',
    desiredWeight: '',
    bloodType: '',
};
// height: 180,
// age: 28,
// weight: 100,
// desiredWeight: 80,
// bloodType: 1,

const CalculatorCaloriesForm = () => {
    const [state, setState] = useState({ ...initialState });
    const userId = useSelector(authSelectors.getUserId);
    const userData = useSelector(state => state.auth.user.userdata)
    const isAuth = useSelector(authSelectors.isAuthenticated);
    const dispatch = useDispatch();

    useEffect(() => {
      setState({ ...userData})

    }, [])

    const handleChange = e => {
        const { name, value } = e.target;
        setState(prevState => ({ ...prevState, [name]: Number(value) }));
    };

    const handleSubmit = e => {
        e.preventDefault();

        isAuth
            ? dispatch(dailyRateAuthOperation(state, userId))
            : dispatch(dailyRateOperation(state));

        setState({ ...initialState });
    };

    return (
        <FormContainer>
            <form className="caloriesForm" onSubmit={handleSubmit}>
                <div className="caloriesFormInputWrapper">
                    <div className="caloriesFormInputContainer">
                        <label className="caloriesFormLabel">
                            Рост *
                            <input
                                className="caloriesFormInput"
                                type="text"
                                name="height"
                                value={state.height}
                                onChange={handleChange}
                            ></input>
                        </label>
                        <label className="caloriesFormLabel">
                            Возраст *
                            <input
                                className="caloriesFormInput"
                                type="text"
                                name="age"
                                value={state.age}
                                onChange={handleChange}
                            ></input>
                        </label>
                        <label className="caloriesFormLabel">
                            Текущий вес *
                            <input
                                className="caloriesFormInput"
                                type="text"
                                name="weight"
                                value={state.weight}
                                onChange={handleChange}
                            ></input>
                        </label>
                    </div>
                    <div className="caloriesFormInputContainer">
                        <label className="caloriesFormLabel">
                            Желаемый вес *
                            <input
                                className="caloriesFormInput"
                                type="text"
                                name="desiredWeight"
                                value={state.desiredWeight}
                                onChange={handleChange}
                            ></input>
                        </label>
                        <div className="caloriesFormRadioContainer">
                            <p className="caloriesFormRadioTitle">
                                Группа крови *
                            </p>

                            <label className="radioButton">
                                <input
                                    type="radio"
                                    name="bloodType"
                                    checked={state.bloodType === 1}
                                    value="1"
                                    onChange={handleChange}
                                />
                                <span className="labelVisible">
                                    <span className="fakeRadioButton"></span>1
                                </span>
                            </label>
                            <label className="radioButton">
                                <input
                                    type="radio"
                                    name="bloodType"
                                    checked={state.bloodType === 2}
                                    value="2"
                                    onChange={handleChange}
                                />
                                <span className="labelVisible">
                                    <span className="fakeRadioButton"></span>2
                                </span>
                            </label>
                            <label className="radioButton">
                                <input
                                    type="radio"
                                    name="bloodType"
                                    checked={state.bloodType === 3}
                                    value="3"
                                    onChange={handleChange}
                                />
                                <span className="labelVisible">
                                    <span className="fakeRadioButton"></span>3
                                </span>
                            </label>
                            <label className="radioButton">
                                <input
                                    type="radio"
                                    name="bloodType"
                                    checked={state.bloodType === 4}
                                    value="4"
                                    onChange={handleChange}
                                />
                                <span className="labelVisible">
                                    <span className="fakeRadioButton"></span>4
                                </span>
                            </label>
                        </div>
                    </div>
                </div>
                <button type="submit" className="mainButton">
                    Похудеть
                </button>
            </form>
        </FormContainer>
    );
};

export default CalculatorCaloriesForm;
