document.querySelector('button').addEventListener('click',() =>{
    const userInput=document.querySelector('input').value; 
    const url=`https://www.themealdb.com/api/json/v1/1/filter.php?i=${userInput}`

    fetch(url) 
    .then(res => res.json()) // parse response as JSON 
    .then(data1 => { 
      console.log(data1);
      console.log(data1.meals[0]);
      console.log(data1.meals[0].strMeal);
      console.log(data1.meals[0].strMealThumb);

      document.querySelector('.meal').textContent=data1.meals[0].strMeal;
      // Set the image source
      document.querySelector('img').src = data1.meals[0].strMealThumb;
      
      // Show the image after setting the src
      document.querySelector('img').style.display = 'block';

     return fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${data1.meals[0].strMeal}`);
    })
    .then(res => res.json()) // parse response as JSON 
    .then(data2 => {
       console.log(data2);
       console.log(data2.meals[0].strInstructions)

       document.querySelector('.recipe').textContent=data2.meals[0].strInstructions

    })
    .catch(err => { 
    console.log(`error ${err}`) 
    });
});



    

