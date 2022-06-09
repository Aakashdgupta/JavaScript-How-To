scrollIndicator = (scrollPercentageElement =null,scrollBarElement=null) => {
    let winscroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    let height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    let scrolled = (winscroll / height) * 100;

    // document.getElementById("scroll").innerHTML = Math.trunc(scrolled) + "%";
    // document.getElementById("scroll-bar").style.width = scrolled + "%";

    if (scrollPercentageElement != null) {
        scrollPercentageElement.innerHTML = Math.trunc(scrolled) + "%";
    }
    if (scrollBarElement != null) {
        scrollBarElement.style.width = scrolled + "%"; ;
    }
  
  
  };