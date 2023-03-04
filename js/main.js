// Load All data from link 
const loadAllData = async () => {
    const url = `https://openapi.programming-hero.com/api/ai/tools`
    const res = await fetch(url);
    const allData = await res.json();
    showAllData(allData.data.tools.slice(0, 6));
};

// display All data 
const showAllData = (allData) => {
    const cardContainer = document.getElementById('card-container');

    cardContainer.innerHTML = '';
    // loop through all data 
    allData.forEach(singleData => {
        // console.log(singleData);

        // destructuring object 
        const { features, name, published_in, id, image } = singleData;
        // add data into cards 
        cardContainer.innerHTML += `
        <div class="card w-full md:w-4/5 bg-base-100 shadow-xl mx-auto">
            <figure><img src="${image}" alt="Shoes" /></figure>
            <div class="card-body p-10">
                <h2 class="card-title font-bold text-2xl">Features</h2>

                <ol class="list-decimal  text-gray-500">
                    <li>${features[0] ? features[0] : 'No Data Found'}</li>
                    <li>${features[1] ? features[1] : 'No Data Found'}</li>
                    <li>${features[2] ? features[2] : 'No Data Found'}</li>
                </ol>

                <hr class="my-4">

                <div class="flex justify-between items-center">
                    <div class="space-y-2">
                        <h2 class="font-bold text-xl">${name}</h2>
                        <p class=" text-gray-500"><i class="fa-solid fa-calendar"></i>  ${published_in}</p>
                    </div>
                    <div class="card-actions justify-end">
                        <label  for="modals">
                             <i class="fa-solid fa-arrow-right bg-red-100 text-red-400 p-3 rounded-full hover:bg-red-300 hover:text-white" onClick="modalData('${id}')"></i>
                        </label>
                    </div>
                </div>
                
            </div>
        </div>
        `
    })
    // loading end 
    toggleLoader(false)
};