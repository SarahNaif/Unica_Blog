import React, { useState } from 'react';
import { Link } from "react-router-dom";
import ItemsCarousel from 'react-items-carousel';
import "./Slider.css"
const Slider = () => {
    const [activeItemIndex, setActiveItemIndex] = useState(0);
  const chevronWidth = 0;
    return (
        <>
      <section  class="slider">
        <div class="container mt-5">
          <div className="mb-5 big-title">
            <h3>Newest from Category</h3>
            <hr className="bg-light"></hr>
          </div>

          <div style={{ padding: `0 ${chevronWidth}px` }}>
            <ItemsCarousel
              requestToChangeActive={setActiveItemIndex}
              activeItemIndex={activeItemIndex}
              numberOfCards={3} // num cards shown
              gutter={30} // space bw them
              //   button style
              leftChevron={<button className="btn btn-light"><i class="fa fas fa-chevron-left "></i></button>}
              rightChevron={<button className="btn btn-light p0"><i class="fa fas fa-chevron-right"></i></button>}
              outsideChevron
              chevronWidth={chevronWidth}
            >
              <div style={{ height: 400 }}>
                {/* Card 1 */}
                <div className="box-card">
                  <img
                    src="https://res.cloudinary.com/dvukj9sqf/image/upload/v1611496116/post-s-img-39_xqwdn4.jpg"
                    className="img w-100 h-400"
                    alt="..."
                  />
                  <div className="mt-5">
                    <h4 className="entry-title  ">
                      <Link
                        to=""
                        title="The Greatest Treasure"
                        className="text-title link"
                      >
                        The Greatest Treasure
                      </Link>
                    </h4>
                    <p className="text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <Link href="#" className="link">
                    Read More &nbsp;
                      <i class="fa fas fa-angle-double-right"></i>
                    </Link>
                  </div>
                </div>
                {/* END Card 1 */}
              </div>
              <div style={{ height: 400 }}>
                {/* Card 1 */}
                <div className="box-card ">
                  <img
                    src="https://res.cloudinary.com/dvukj9sqf/image/upload/v1611530747/post-s-img-26-800x588_gpa89s.jpg"
                    className="img w-100 h-400 "
                    alt="..."
                  />
                  <div className="mt-5">
                    <h4 className="entry-title  ">
                      <Link
                        to=""
                        title="The Greatest Treasure"
                        className="text-title link"
                      >
                        The Greatest Treasure
                      </Link>
                    </h4>
                    <p className="text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <Link href="#" className="link">
                      Read More &nbsp;
                      <i class="fa fas fa-angle-double-right"></i>
                    </Link>
                  </div>
                </div>
                {/* END Card 1 */}
              </div>
            
              <div style={{ height: 400}}></div>
              <div style={{ height: 400, background: "#EEE" }}>Fourth card</div>
              <div style={{ height: 400, background: "#EEE" }}>Third card</div>
              <div style={{ height: 400, background: "#EEE" }}>Fourth card</div>
            </ItemsCarousel>
          </div>
        </div>
      </section>
      {/* about us */}
      <div class=" container-fluid  d-flex justify-content-center d-flex align-items-center cut-page">

 
  
  <div className="text-center">
 <h3 className=" quote "><span className="">  Small steps every day  <br></br>bring us to a better tomorrow. </span></h3> 
    </div>
</div>


      </>
    );
}

export default Slider
