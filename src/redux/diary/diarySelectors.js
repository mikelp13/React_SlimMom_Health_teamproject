const getDate = state => state.currentDay.date;
// const getDayInfo = state => state.diaryProducts.dayInfo.daySummary;
const getDayProducts = state => state.products;
const getDayEatenProducts = state => state.dayInfo.eatenProducts;
const getDayId = state => state.dayInfo.dayId;


const diarySelectors = { getDate, getDayEatenProducts, getDayProducts, getDayId};

export default diarySelectors;
