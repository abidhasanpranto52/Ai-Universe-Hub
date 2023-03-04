// Load All data from link 
const loadAllData = async () => {
    const url = `https://openapi.programming-hero.com/api/ai/tools`
    const res = await fetch(url);
    const allData = await res.json();
    showAllData(allData.data.tools.slice(0, 6));
};