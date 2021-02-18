const getCurrentDayId = (state) => state.user.currentDayId;
const getDaySummary = (state) => state.user.daySummary;
// ============================================= for test only =====================================
const getProductsSelectors = (state) => state.user.eatenProducts;



const itemSelectors = {
    getDaySummary,
    getCurrentDayId,
    getProductsSelectors,
}

export default itemSelectors