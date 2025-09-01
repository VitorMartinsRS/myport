function toggleMenu() {
    document.getElementById("sidebar").classList.toggle("active");
}
 let currentIndex = 0;
                        const images = document.querySelectorAll('.carousel-img');

                        function showImage(index) {
                            images.forEach((img, i) => {
                                img.classList.toggle('active', i === index);
                            });
                        }

                        function moveCarousel(direction) {
                            currentIndex = (currentIndex + direction + images.length) % images.length;
                            showImage(currentIndex);
                        }

                        showImage(currentIndex);