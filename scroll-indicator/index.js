const handleScrollIndicator = () => {
  const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const scrollIndicator = (winScroll / height) * 100;
  document.getElementById('myBar').style.width = scrollIndicator + '%';
  console.log('scrollTOP: ', document.body.scrollTop);
  console.log('scrollTOP 1: ', document.documentElement.scrollTop);
  // console.log('scroll height: ', document.documentElement.scrollHeight);
  // console.log('client height: ', document.documentElement.clientHeight);
}

window.onscroll = () => {
  handleScrollIndicator();
}