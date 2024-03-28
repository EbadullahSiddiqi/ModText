import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function About(props) {
  const btnStyle = {
    backgroundColor: props.mode === "dark" ? "white" : "#051424",
    color: props.mode === "dark" ? "#051424" : "white",
    border: "none",
  };
  return (
    <div className="container">
      <h1>About Us</h1>
      <p className="my-3">
        Welcome to ModText, your go-to web app for all your text manipulation
        needs! Are you tired of manually converting text to lower or upper case?
        Do you find yourself constantly searching for ways to make your text
        look more professional with title case formatting? Look no further –
        ModText has got you covered! ModText is not just another text utility
        app; it's your ultimate solution for effortless text transformation.
        Whether you're drafting an email, writing a blog post, or simply
        tweaking your social media captions, ModText empowers you to customize
        your text with ease and efficiency. But ModText isn't just about
        converting cases. We understand the importance of seamless user
        experience, which is why we've included features like copy text and
        clear text. Need to quickly copy your formatted text for pasting
        elsewhere? No problem! Want to start fresh with a clean slate? Just hit
        the clear text button – it's that simple! Our mission at ModText is to
        simplify your workflow and enhance your productivity. With our intuitive
        interface and lightning-fast performance, you'll wonder how you ever
        managed without it. So why wait? Try ModText today and revolutionize the
        way you manipulate text online!
      </p>
      <Link to="/" className="btn btn-dark" style={btnStyle}>
        Back
      </Link>
    </div>
  );
}

