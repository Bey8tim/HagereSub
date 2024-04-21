import React, { useRef } from "react";
import "./Testimonials.css";
import next_icon from "../../assets/next-icon.png";
import back_icon from "../../assets/back-icon.png";
import user_1 from "../../assets/user-1.png";
import user_2 from "../../assets/user-2.png";
import user_3 from "../../assets/user-3.png";
import user_4 from "../../assets/user-4.png";

const Testimonials = () => {
  const slider = useRef();
  let tx = 0;
  const slideForward = () => {
    if (tx > -50) {
      tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };

  const slideBackward = () => {
    if (tx < 0) {
      tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };

  return (
    <div className="testimonials">
      <img src={next_icon} alt="" className="next-btn" onClick={slideForward} />
      <img
        src={back_icon}
        alt=""
        className="back-btn"
        onClick={slideBackward}
      />
      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_1} alt="" />
                <div>
                  <h3>Ato Temesgen Retebo</h3>
                  <span>Owner of TRIF, Addis Ababa</span>
                </div>
              </div>
              <p>
                The experience with HagereSub has been exceptional! Their
                customer service is the best, and their work is always exceed my
                expectations.I am very grateful for the work you have done!
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_2} alt="" />
                <div>
                  <h3>Mr Tamru E.</h3>
                  <span>General Manager of WMG, Addis Ababa</span>
                </div>
              </div>
              <p>
                Many thanks for getting this back to me so quickly and thank you
                for the best service.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_3} alt="" />
                <div>
                  <h3>Dr Tegene </h3>
                  <span>Hiwot Hospital, Hossana</span>
                </div>
              </div>
              <p>
                The experience with HagereSub has been exceptional! Their
                customer service is the best, and their work is always exceed my
                expectations.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_4} alt="" />
                <div>
                  <h3>Mrs Alade </h3>
                  <span>Hospital, Dire Dawa</span>
                </div>
              </div>
              <p>
                I can't stop recommending HagereSub. Since I started using your
                services, my company has improved significantly.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Testimonials;
