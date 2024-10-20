import React from "react";
import PickMeals from "../Assets/pick-meals-image.png";
import ChooseMeals from "../Assets/choose-image.png";
import DeliveryMeals from "../Assets/delivery-image.png";

const Work = () => {
  const workInfoData = [
    {
      image: PickMeals,
      title: "Pick Meals",
      text: "Explore a wide range of delicious dishes and find your perfect meal with just a few taps!"
    },
      {
      image: ChooseMeals,
      title: "Choose How Often",
      text: "Set your delivery schedule—whether it’s a one-time order or regular meals, it's all up to you!"
    },
    {
      image: DeliveryMeals,
      title: "Fast Deliveries",
      text: "Enjoy fast, fresh deliveries straight to your doorstep, ensuring your food arrives hot and on time!"
    }
  ];
    return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Work</p>
        <h1 className="primary-heading">How It Works</h1>
        <p className="primary-text">
        With FOODIE, getting your favorite meals is a breeze! Simply browse a wide range of cuisines from top restaurants, customize your order, and check out with ease. Once placed, you can track your order in real-time, ensuring it arrives hot and fresh at your doorstep. Delicious food is just a few taps away!
        </p>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
