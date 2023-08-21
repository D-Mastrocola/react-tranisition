import anime from "animejs";

let HeaderButton = ({ location, text }) => {
  let redirect = () => {
    let currentPath = window.location.pathname.split("/");
    currentPath = "/" + currentPath[currentPath.length - 1];

    if (currentPath === location) return false;

    let animationDiv = document.getElementById("animation-div");

    if (currentPath !== "/") {
      animationDiv.style.zIndex = 10;
      animationDiv.style.width = '100vw';
      animationDiv.style.height = 0;
      animationDiv.style.opacity = 1;
      anime({
        targets: "#animation-div",
        height: '100vh',
        easing: 'linear',
        duration: 400,
        complete: function () {
          window.location.replace(location);
        },
      });
    } else {
      animationDiv.style.zIndex = 10;
      anime({
        targets: "#animation-div",
        opacity: 1,
        duration: 800,
        complete: function () {
          window.location.replace(location);
        },
      });
    }
  };
  return <button onClick={() => redirect()}>{text}</button>;
};
export default HeaderButton;
