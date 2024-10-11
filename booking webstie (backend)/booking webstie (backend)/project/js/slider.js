// Initialize Swiper for the home-slider (Auto Slider)
const homeSwiper = new Swiper(".home-slider", {
    loop: true,
    autoplay: {
        delay: 3000, // 3 seconds delay for auto sliding
        disableOnInteraction: false, // Continue autoplay even after user interaction
    },
    effect: "coverflow", // Optional: adds a coverflow transition effect
    spaceBetween: 30,
    grabCursor: true,
    coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: false,
    }
});
