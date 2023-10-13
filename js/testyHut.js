const loadFishFood = (name) => {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`)
        .then(res => res.json())
        .then(data => displayFishFood(data.meals))
}

const displayFishFood = fishFoodsList => {
    const foodContainer = document.getElementById('food-container')
    fishFoodsList.forEach((fishFood, number) => {
        console.log(fishFood.idMeal)
        if (number < 6) {
            const foodDiv = document.createElement('div')
            foodDiv.classList.add('row', 'align-items-center')
            foodDiv.innerHTML = `
        <div class="col-6">
            <div>
            <img class="img-fluid rounded" src="${fishFood.strMealThumb}">
            </div>
        </div>
        <div class="col-6">
            <div>
            <h1 class ="text-black text-bolder">${fishFood.strMeal}</h1>
            <p>This is ${fishFood.strCategory} and this dish is famous in ${fishFood.strArea}. This food is a lot of delicious</p>
            <a type="button" onClick="fishFoodDetails('${fishFood.idMeal}')" class="text-warning" data-bs-toggle="modal" data-bs-target="#foodModal">
                    View Details
                </a>
            </div>
        </div>
        `
            foodContainer.appendChild(foodDiv)
        }

    });

}
const fishFoodDetails = fishFood =>{
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${fishFood}`)
    .then(res => res.json())
    .then(data => displayFoodName(data.meals[0]))

    
}
const displayFoodName = foodName => {
    console.log(foodName)
    const foodNameTag = document.getElementById('foodModalLabel');
    foodNameTag.innerText=`${foodName.strMeal}`;
    foodNameTag.classList.add('fw-bolder', 'text-black')
    const detailsBody = document.getElementById('details-body');
    const fiveLine = foodName.strInstructions.slice(0, 190)
    detailsBody.innerHTML = `
        <img class="w-100 rounded mb-4" style="height:250px;" src="${foodName.strMealThumb}">
        <p><strong>Category:</strong> <span class="text-secondary">${foodName.strCategory}</span><p>
        <p><strong>Area:</strong> <span class="text-secondary">${foodName.strArea}</span></p>
        <p><strong>Instruction:</strong> <span class="text-secondary">${fiveLine}</span></p>
        <p><strong>Youtube:</strong> <span class="text-secondary">${foodName.strYoutube}</span></p>
    `
}

document.getElementById('seeAllBtn').addEventListener('click', function () {
    loadBeefFood('beef');
})
const loadBeefFood = (name) => {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`)
        .then(res => res.json())
        .then(data => displayFishFood(data.meals))
}

const displayBeefFood = beefFoodsList => {
    const foodContainer = document.getElementById('food-container')
    beefFoodsList.forEach((beefFood, number) => {

        if (number < 6) {
            const foodDiv = document.createElement('div')
            foodDiv.classList.add('row', 'align-items-center')
            foodDiv.innerHTML = `
        <div class="col-6">
            <div>
            <img class="img-fluid rounded" src="${beefFood.strMealThumb}">
            </div>
        </div>
        <div class="col-6">
            <div>
                <h1 class ="text-black text-bolder">${beefFood.strMeal}</h1>
                <p>This is ${beefFood.strCategory} and this dish is famous in ${beefFood.strArea}. This food is a lot of delicious</p>
                
                <a type="button" class="text-warning" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    Launch demo modal
                </a>
            </div>
        </div>
        `
            foodContainer.appendChild(foodDiv)
        }

    });

}

loadFishFood('fish')