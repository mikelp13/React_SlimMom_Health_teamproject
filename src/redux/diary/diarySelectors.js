const getDate = state => state.diaryProducts.currentDay;
const getDayInfo = state => state.diaryProducts.dayInfo.daySummary;

const diarySelectors = { getDate, getDayInfo };

export default diarySelectors;
