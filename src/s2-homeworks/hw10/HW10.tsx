import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppStoreType } from './bll/store';
import {loadingAC, LoadingReducerType,} from './bll/loadingReducer';
import SuperButton from '../hw04/common/c2-SuperButton/SuperButton';
import s2 from '../../s1-main/App.module.css';
import { Loader } from './Loader';

const HW10 = () => {
    const dispatch = useDispatch();
    const isLoadingState = useSelector<AppStoreType,LoadingReducerType>(store => store.loading);
    const isLoading = isLoadingState.isLoading;

    const setLoading = () => {
        dispatch(loadingAC(!isLoading))
        setTimeout(() => {
            dispatch(loadingAC(!!isLoading))
        }, 1500);
    };

    return (
        <div id="hw10">
            <div className={s2.hwTitle}>Homework #10</div>

            <div className={s2.hw}>
                {isLoading ? (
                    <div id="hw10-loading">
                        <Loader />
                    </div>
                ) : (
                    <SuperButton id="hw10-button-start-loading" onClick={setLoading}>
                        Set loading...
                    </SuperButton>
                )}
            </div>
        </div>
    );
};

export default HW10;
