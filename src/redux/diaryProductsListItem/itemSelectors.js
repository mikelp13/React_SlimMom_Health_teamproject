const getCurrentDayId = (state) => state.user.currentDayId;
const getDaySummary = (state) => state.user.daySummary;
// ============================================= for test only =====================================




const selectors = {
    getDaySummary,
    getCurrentDayId,
}

export default selectors