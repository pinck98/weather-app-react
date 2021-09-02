import React from "react";

function Form(props) {
  return (
    <form onSubmit={props.getWeather}>
      <input type="text" id='cityInput' name='city' placeholder=" Enter your city city" />
      <input type="text" id='countryInput' name='country' placeholder=" Enter your country" />
      <button type="submit">Get your weather</button>
      <p id='copyright'>powered by<a href='//imweb.netlify.app/' target="_blank">Ibrahim Mad'ed</a> ©</p>
    </form>
  );
}

export default Form;
