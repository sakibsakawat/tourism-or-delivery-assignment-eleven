import React from 'react';
import './Featured.css'
import img1 from'../../Images/f-1.png'
import img2 from'../../Images/f-2.png'

const Featured = () => {
    return (
        <div className="divFeatured mt-5">
            <div>
              <h4 className="text-center mb-3 pt-4 ">Featured Tours</h4>
            <h2 className="text-center fw-bold">See Our Best Popular<br/> Package</h2>
            <div className=" d-flex p-5 justify-content-around">
            
            
 <div className="card mb-3 w-50 cardsW me-5">
  <div className="row g-0">
    <div className="col-md-4">
      <img src={img1} className="img-fluid rounded-start" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">Group Tour to Amsterdam</h5>
        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p className="card-text"><i class="fas fa-star fs-6 text-warning"></i> 3k+ Rating</p>
      </div>
    </div>
  </div>
</div>




<div className="card mb-3 w-50 ms-5">
  <div className="row g-0">
    <div className="col-md-4">
      <img src={img2} className="img-fluid rounded-start" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">Group Tour to Miami</h5>
        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p className="card-text"><i class="fas fa-star fs-6 text-warning"></i> 3.5k+ Rating</p>
      </div>
    </div>
  </div>
</div>
            
            
            
            
            
            </div>
            
            
            
            </div>
            

        </div>
    );
};

export default Featured;