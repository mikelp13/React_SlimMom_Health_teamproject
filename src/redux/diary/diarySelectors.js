const getDate = state => state.diaryProducts.dayInfo.date;
const getDayInfo = state => state.diaryProducts.dayInfo.daySummary;

const diarySelectors = {getDate, getDayInfo};

export default diarySelectors