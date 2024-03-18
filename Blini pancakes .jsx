import React,{useEffect,useState} from 'react'
import './App.css'
const Fetching = () =>{
    const[data,setData]=useState([]);
    useEffect(() =>{
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=Blini')
        .then(response =>response.json())
        .then(data => setData(data.meals))
    })
    return(
        <div>
            {
             data.map((item) =>
             <>
             <div id='coll'>
             <div class="container">
             <div class="row">
                <div class="col-sm-4">
                <h6>
                    <img src='https://www.themealdb.com/images/icons/flags/big/32/ru.png'/>
                    {item.strMeal}
                    </h6>
            <img src='https://www.themealdb.com/images/media/meals/0206h11699013358.jpg'width="100%"/>
           <button>{item.strTags}</button><br/>
           <img src='https://www.themealdb.com/images/icons/Arrow-Left.png'width="150px;"/>
           <img src='https://www.themealdb.com/images/icons/Arrow-Right.png' width="150px;"/>
            </div>
            

            
                <div class="col-sm-8">
                    <center>
                        <h4>Ingredients</h4>
                <div class="container">
                <div class="row">
                <div class="col-sm-4">
                        <img src='https://www.themealdb.com/images/ingredients/Buckwheat.png' width="100%"/>
                        <h6>{item.strMeasure1}{item.strIngredient1}</h6>
                        </div>
                        <div class="col-sm-4">
                        <img src='https://www.themealdb.com/images/ingredients/Flour.png' width="100%"/>
                        <h6>{item.strMeasure2}{item.strIngredient2}</h6>
                        </div>
                        <div class="col-sm-4">
                        <img src='https://www.themealdb.com/images/ingredients/Salt.png' width="100%"/>
                        <h6>{item.strMeasure3}{item.strIngredient3}</h6>
                        </div>
                        <div class="col-sm-4">
                        <img src='https://www.themealdb.com/images/ingredients/Yeast.png' width="100%"/>
                        <h6>{item.strMeasure4}{item.strIngredient4}</h6>
                        </div>
                        <div class="col-sm-4">
                        <img src='https://www.themealdb.com/images/ingredients/Milk.png' width="100%"/>
                        <h6>{item.strMeasure5}{item.strIngredient5}</h6>
                        </div>
                        <div class="col-sm-4">
                        <img src='https://www.themealdb.com/images/ingredients/Butter.png' width="100%"/>
                        <h6>{item.strMeasure6}{item.strIngredient6}</h6>
                        </div>
                        <div class="col-sm-4">
                        <img src='https://www.themealdb.com/images/ingredients/Egg.png' width="100%"/>
                        <h6>{item.strMeasure7}{item.strIngredient7}</h6>
                        </div>
                        
                        </div>

                </div>
                </center>
            </div>
            </div>
            </div>
            <div class="container">
                <center> <h3>Instructions</h3></center>
                
       {item.strInstructions}
       <center/>
            </div>

<div class="container">
    <center>
    <h4>Browse More</h4>
    <h4>A / B / C / D / E / F / G / H / I / J / K / L / M / N / O / P / Q / R / S / T / U / V / W / X / Y / Z</h4>
    </center>
</div>


</div>
             </>
             )   
            }
        </div>
    )
        }
export default Fetching