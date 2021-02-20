const getDate = state => state.currentDay.date;
// const getDayInfo = state => state.diaryProducts.dayInfo.daySummary;
const getDayProducts = state => state.products;
const notAllowedProducts = state => state.user.userData.notAllowedProducts;
const getDayEatenProducts = state => state.dayInfo.eatenProducts;
const getDayId = state => state.dayInfo.dayId;


const diarySelectors = { getDate, getDayEatenProducts, getDayProducts, notAllowedProducts, getDayId};

export default diarySelectors;
