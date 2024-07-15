import React from 'react'
import Navbar from './Navbar'
import './Landingpage.css'
import im from '../Image/p1.png'
import lo from '../Image/divider_11.png'
import ab from '../Image/po.jpg'
import ro from '../Image/You.png'
import donut from '../Image/Donut.png'
import burger from  '../Image/OPP.png'
import cake from  '../Image/cake.png'
import waffle from  '../Image/Waffles.png'
export default function 
() {
  return (
    <>
     <div className='hel'>
<Navbar/>
    </div>

    <div className='page'>
         <div className='text'>
          <h1 >Happiness is homemade, and its starts in Bakery</h1>
          <p style={{color:'black'}}>Customized cakes, treats and every thing sweet for all your special moments.</p>
          <button>Order now</button>
         </div>

         <div className='img'>
               <img src={im} style={{width:'50rem'}}></img>
         </div>
    </div>


    
<div className="about" id='ui'>

      <div className='title'>
            <img src={lo}  style={{width:'13rem'}}></img>
            <h2>Who We Are</h2>
      </div>

      <div className='about-contents'>
        <div className='image1'>
            <img src={ro} style={{width:'28rem'}}></img>
        </div>
          
          <div className='text1'>
          <p>Welcome to Sweet Treats Bakery, where we bake fresh, delicious treats every day. As a family-owned bakery, we take pride in using high-quality ingredients to create our breads, pastries, and cakes. Our goal is to bring a smile to your face with every bite. Thank you for choosing Sweet Treats Bakery!</p>
          </div>

         
      </div>
</div>

   <div className='service' id='yo'>
      
        <div class='head'>
        <img src={lo}  style={{width:'13rem'}}></img>
          <h2>Services</h2>
        </div>
    
        <div className='cont'>
     
           <div className='c1'>
            <div className='hu'>
            <img src={donut} ></img>
            </div>
                <div className='hy'>
                <h2>Item: <span>Donut</span></h2>
                <h3>Price: <span style={{color:'red'}}>$50</span></h3>
                </div>
           
                  <button className='cart'>Add to Cart</button>
           </div>
           <div className='c1'>
            <div className='hu1'>
            <img src={burger} ></img>
            </div>
                <div className='hy'>
                <h2>Item: <span>Hamburger</span></h2>
                <h3>Price: <span style={{color:'red'}}>$100</span></h3>
                </div>
           
                  <button className='cart'>Add to Cart</button>
           </div>
           <div className='c1'>
            <div className='hu2'>
            <img src={cake} style={{padding:'0px 15px 0px 10px'}}></img>
            </div>
                <div className='hy'>
                <h2>Item: <span>Birthday Cake</span></h2>
                <h3>Price: <span style={{color:'red'}}>$600/kg</span></h3>
                </div>
           
                  <button className='cart'>Add to Cart</button>
           </div>
           <div className='c1'>
            <div className='hu3'>
            <img src={waffle} style={{padding:'25px 15px 0px 20px'}}></img>
            </div>
                <div className='hy'>
                <h2>Item: <span>Donut</span></h2>
                <h3>Price: <span style={{color:'red'}}>$50</span></h3>
                </div>
           
                  <button className='cart'>Add to Cart</button>
           </div>
           <div className='c1'>
            <div className='hu'>
            <img src={donut} ></img>
            </div>
                <div className='hy'>
                <h2>Item: <span>Donut</span></h2>
                <h3>Price: <span style={{color:'red'}}>$50</span></h3>
                </div>
           
                  <button className='cart'>Add to Cart</button>
           </div>
           <div className='c1'>
            <div className='hu'>
            <img src={donut} ></img>
            </div>
                <div className='hy'>
                <h2>Item: <span>Donut</span></h2>
                <h3>Price: <span style={{color:'red'}}>$50</span></h3>
                </div>
           
                  <button className='cart'>Add to Cart</button>
           </div>
           <div className='c1'>
            <div className='hu'>
            <img src={donut} ></img>
            </div>
                <div className='hy'>
                <h2>Item: <span>Donut</span></h2>
                <h3>Price: <span style={{color:'red'}}>$50</span></h3>
                </div>
           
                  <button className='cart'>Add to Cart</button>
           </div>
           <div className='c1'>
            <div className='hu'>
            <img src={donut} ></img>
            </div>
                <div className='hy'>
                <h2>Item: <span>Donut</span></h2>
                <h3>Price: <span style={{color:'red'}}>$50</span></h3>
                </div>
           
                  <button className='cart'>Add to Cart</button>
           </div>
        </div>
        <div class='more'>
        <button >Show More</button>
        </div>
         
   </div>
    </>
   
  )
}
