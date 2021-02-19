const getDate = state => state.diaryProducts.currentDay;
const getDayInfo = state => state.diaryProducts.dayInfo.daySummary;
const getDayProducts = state => state.diaryProducts.products;
const getDayEatenProducts = state => state.diaryProducts.dayInfo.eatenProducts;
const getDayId = state => state.diaryProducts.dayInfo.id;


const diarySelectors = { getDate, getDayInfo, getDayEatenProducts, getDayProducts, getDayId};

export default diarySelectors;
