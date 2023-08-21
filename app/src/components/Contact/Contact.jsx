import Header from "../Header/Header";
import React, { useState, useEffect } from 'react';
import anime from "animejs";

let Contact = () => {
  useEffect(() => {

    anime({
      targets: "#animation-div",
      opacity: 0,
      duration: 800,
      easing: 'linear',
      complete: function() {
        let animationDiv = document.getElementById('animation-div');
        animationDiv.style.zIndex = -5;
      }
    });
  })
  return (
    <>
      <Header />

      <main>
        <h2>Contact</h2>
        <form>
          <label for="fname">First Name</label>
          <input
            type="text"
            id="fname"
            name="firstname"
            placeholder="Your name.."
          />

          <label for="lname">Last Name</label>
          <input
            type="text"
            id="lname"
            name="lastname"
            placeholder="Your last name.."
          />

          <label for="country">Country</label>
          <select id="country" name="country">
            <option value="australia">Australia</option>
            <option value="canada">Canada</option>
            <option value="usa">USA</option>
          </select>

          <label for="subject">Subject</label>
          <textarea
            id="subject"
            name="subject"
            placeholder="Write something.."
            style={{height: '200px'}}
          ></textarea>

          <input type="submit" value="Submit" />
        </form>
      </main>
    </>
  );
};
export default Contact;
