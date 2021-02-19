const getDate = state => state.diaryProducts.currentDay;
const getDayInfo = state => state.diaryProducts.dayInfo.daySummary;
const getDayProducts = state => state.diaryProducts.products;
const getDayEatenProduct = state => state.diaryProducts.myProducts.eatenProduct;
const getDayProductId = state => state.diaryProducts.myProducts.eatenProduct.day.id;

const diarySelectors = { getDate, getDayInfo, getDayEatenProduct, getDayProducts, getDayProductId};

export default diarySelectors;
