import React from 'react'
import { Link } from 'react-router-dom';
import './App.css'
const Home = () => {
  return (
    <>
    
    <div id='col'>
    
    <div class="container">
        <div class="row">
          <div class="col-sm-4" id='id'>
    <img src='https://www.themealdb.com/images/meal-icon.png'/>
    </div>
    <div class="col-sm-4">
      <div id='para'>
    <h1>Welcome to TheMealDB</h1>
    <p>Welcome to TheMealDB: An open, crowd-sourced database of Recipes from around the world.</p>
    <p>We also offer a free recipe API for anyone wanting to use it, with additional features for subscribers.</p>
    <p>Click button above to upgrade free API to premium for $3</p>
    <p>Currently (54 supporters)</p>
  </div>
    </div>
    <div class="col-sm-4" id='id'>
    <img src='https://www.themealdb.com/images/meal-icon.png'/>
    </div>
    </div>
    </div>
    <hr/>

    <div id='total'>
    <div> Total Meals: 302 Total Ingredients: 575 Images: 302</div>
    </div>
<hr/>
<br/>

<div class="container">
  <div class="row">
    <div id='lat'>
      <h4>Latest Meals</h4>
    </div>
    <div class="col-sm-3">
      <img src='https://www.themealdb.com/images/media/meals/kos9av1699014767.jpg'width="100%"/>
      <p>Lamb Pilaf (Plov)</p>
      </div>
      <div class="col-sm-3">
      <img src='https://www.themealdb.com/images/media/meals/oe8rg51699014028.jpg' width="100%"/>
      <p>Strawberries Romanoff</p>
      </div>
      <div class="col-sm-3">
      <img src='https://www.themealdb.com/images/media/meals/ebvuir1699013665.jpg' width="100%"/>
      <p>Potato Salad (Olivier Salad)</p>
      </div>
      <div class="col-sm-3">
      <Link to="/fetching">
      <img src='https://www.themealdb.com/images/media/meals/0206h11699013358.jpg'width="100%"/>
      <p>Blini Pancakes</p>
      </Link>
      </div>
      </div>
      </div>

      <div class="container">
  <div class="row">
    <div class="col-sm-3">
      <img src='https://www.themealdb.com/images/media/meals/7n8su21699013057.jpg'width="100%"/>
      <p>Fish Soup (Ukha)</p>
      </div>
      <div class="col-sm-3">
      <img src='https://www.themealdb.com/images/media/meals/zadvgb1699012544.jpg'width="100%"/>
      <p>Beetroot Soup (Borscht)</p>
      </div>
      <div class="col-sm-3">
      <img src='https://www.themealdb.com/images/media/meals/60oc3k1699009846.jpg'width="100%"/>
      <p>Cabbage Soup (Shchi)</p>
      </div>
      <div class="col-sm-3">
      <img src='https://www.themealdb.com/images/media/meals/hqaejl1695738653.jpg'width="100%"/>
      <p>Bread omelette</p>
      </div>
      </div>
      </div>
<hr/>
      <div class="container">
  <div class="row">
    <div id='pop'>
      <h4>Popular Ingredients</h4>
    </div>
    <div class="col-sm-3">
      <img src='https://www.themealdb.com/images/ingredients/Chicken.png'width="100%"/>
      <p>Chicken</p>
      </div>
      <div class="col-sm-3">
      <img src='https://www.themealdb.com/images/ingredients/Salmon.png'width="100%"/>
      <p>Salmon</p>
      </div>
      <div class="col-sm-3">
      <img src='https://www.themealdb.com/images/ingredients/Beef.png'width="100%"/>
      <p>Beef</p>
      </div>
      <div class="col-sm-3">
      <img src='https://www.themealdb.com/images/ingredients/Pork.png'width="100%"/>
      <p>Pork</p>
      </div>
      </div>
      </div>
      <hr/>


      <div class="container">
  <div class="row">
  <div id='random'>
      <h4>Random Meals</h4>
    </div>
    <div class="col-sm-3">
      <img src='https://www.themealdb.com/images/media/meals/0jv5gx1661040802.jpg'width="100%"/>
      <p>Fettuccine Alfredo</p>
      </div>
      <div class="col-sm-3">
      <img src='https://www.themealdb.com/images/media/meals/c9a3l31593261890.jpg'width="100%"/>
      <p>Paszteciki (Polish Pasties)</p>
      </div>
      <div class="col-sm-3">
      <img src='https://www.themealdb.com/images/media/meals/adxcbq1619787919.jpg'width="100%"/>
      <p>Apam balik</p>
      </div>
      <div class="col-sm-3">
      <img src='https://www.themealdb.com/images/media/meals/n7qnkb1630444129.jpg'width="100%"/>
      <p>Chivito uruguayo</p>
      </div>
      </div>
      </div>
    

      <div class="container">
  <div class="row">
    
    <div class="col-sm-3">
      <img src='https://www.themealdb.com/images/media/meals/wruvqv1511880994.jpg'width="100%"/>
      <p>Chicken Basquaise</p>
      </div>
      <div class="col-sm-3">
      <img src='https://www.themealdb.com/images/media/meals/wrssvt1511556563.jpg'width="100%"/>
      <p>Beef and Oyster pie</p>
      </div>
      <div class="col-sm-3">
      <img src='https://www.themealdb.com/images/media/meals/xqrwyr1511133646.jpg'width="100%"/>
      <p>Salted Caramel Cheescake</p>
      </div>
      <div class="col-sm-3">
      <img src='https://www.themealdb.com/images/media/meals/ytttsv1511798734.jpg'width="100%"/>
      <p>Fennel Dauphinoise</p>
      </div>
      </div>
      </div>
      <br/>
      <hr/>
      <br/>

      <div class="container">
  <div class="row">
    <div id='ran'>
      <h4>Random Ingredients</h4>
    </div>
    <div class="col-sm-3">
      <img src='https://www.themealdb.com/images/ingredients/Yellow%20Onion.png'width="100%"/>
      <p>Yellow Onion</p>
      </div>
      <div class="col-sm-3">
      <img src='https://www.themealdb.com/images/ingredients/Cheese%20Curds.png'width="100%"/>
      <p>Cheese Curds</p>
      </div>
      <div class="col-sm-3">
      <img src='https://www.themealdb.com/images/ingredients/Bean%20Sprouts.png'width="100%"/>
      <p>Bean sprouts</p>
      </div>
      <div class="col-sm-3">
      <img src='https://www.themealdb.com/images/ingredients/Coriander%20Seeds.png'width="100%"/>
      <p>Coriander Seeds</p>
      </div>
      </div>
      </div>
      <hr/>
      
<div id='tot'>
      <div class="container">
      
          <div id='con'>
            <h4>Browse Country</h4>
          </div>
          <div id='con'>
          <img src='https://www.themealdb.com/images/icons/flags/big/64/gb.png'/> 
          <img src='https://www.themealdb.com/images/icons/flags/big/64/us.png'/> 
           <img src='https://www.themealdb.com/images/icons/flags/big/64/fr.png'/> 
           <img src='https://www.themealdb.com/images/icons/flags/big/64/fr.png'/> 
           <img src='https://www.themealdb.com/images/icons/flags/big/64/ca.png'/> 
           <img src='https://www.themealdb.com/images/icons/flags/big/64/cn.png'/> 
           <img src='https://www.themealdb.com/images/icons/flags/big/64/nl.png'/> 
           <img src='https://www.themealdb.com/images/icons/flags/big/64/eg.png'/> 
           <img src='https://www.themealdb.com/images/icons/flags/big/64/gr.png'/> 
           <img src='https://www.themealdb.com/images/icons/flags/big/64/in.png'/> 
           <img src='https://www.themealdb.com/images/icons/flags/big/64/ie.png'/> 
           <img src='https://www.themealdb.com/images/icons/flags/big/64/it.png'/> 
           <img src='https://www.themealdb.com/images/icons/flags/big/64/jp.png'/> 
           <img src='https://www.themealdb.com/images/icons/flags/big/64/kn.png'/>  
           <img src='https://www.themealdb.com/images/icons/flags/big/64/my.png'/>                                                                                   
          <img src='https://www.themealdb.com/images/icons/flags/big/64/mx.png'/>
</div>
        </div>
      
      <div class="container">
        <div id='con'>
        <img src='https://www.themealdb.com/images/icons/flags/big/64/ma.png'/>
         <img src='https://www.themealdb.com/images/icons/flags/big/64/hr.png'/>
         <img src='https://www.themealdb.com/images/icons/flags/big/64/no.png'/>
         <img src='https://www.themealdb.com/images/icons/flags/big/64/pt.png'/>
         <img src='https://www.themealdb.com/images/icons/flags/big/64/ru.png'/>
         <img src='https://www.themealdb.com/images/icons/flags/big/64/ar.png'/>
         <img src='https://www.themealdb.com/images/icons/flags/big/64/es.png'/>
         <img src='https://www.themealdb.com/images/icons/flags/big/64/sk.png'/>
         <img src='https://www.themealdb.com/images/icons/flags/big/64/th.png'/>
         <img src='https://www.themealdb.com/images/icons/flags/big/64/sa.png'/>
         <img src='https://www.themealdb.com/images/icons/flags/big/64/vn.png'/>
         <img src='https://www.themealdb.com/images/icons/flags/big/64/tr.png'/>
         <img src='https://www.themealdb.com/images/icons/flags/big/64/sy.png'/>
         <img src='https://www.themealdb.com/images/icons/flags/big/64/dz.png'/>
         <img src='https://www.themealdb.com/images/icons/flags/big/64/tn.png'/>
         <img src='https://www.themealdb.com/images/icons/flags/big/64/pl.png'/>
         </div>
         </div>
         <div class="container">
          <div id='con'>
          <img src='https://www.themealdb.com/images/icons/flags/big/64/ph.png'/>
         </div>
         </div>

         <div class="container">
          <div id='con'>
          <h5>Browse By Name</h5>
         <h3>
         A / B / C / D / E / F / G / H / I / J / K / L / M / N / O / P / Q / R / S / T / U / V / W / X / Y / Z
         </h3>
         </div>
</div>
</div>





</div>

    </>
  )
}

export default Home