document.addEventListener("DOMContentLoaded", function () {
    var images = [
        'https://acre-image-collections.s3.amazonaws.com/image-6578722caea701702392364_medium.jpg',
        'https://acre-images.s3.amazonaws.com/image-5ac62b9e561041522936734_medium.jpeg',
        'https://acre-images.s3.amazonaws.com/image-5acac631504581523238449_medium.jpeg',
        'https://acre-image-collections.s3.amazonaws.com/image-65787222618211702392354_medium.jpg',
        'https://acre-image-collections.s3.amazonaws.com/image-657872175b22e1702392343_medium.jpg',
        'https://acre-image-collections.s3.amazonaws.com/image-657871ff7d8401702392319_medium.jpg',
        'https://acre-image-collections.s3.amazonaws.com/image-6576286c7c4b61702242412_medium.jpg',
        'https://acre-image-collections.s3.amazonaws.com/image-6578af5f9af671702408031_medium.jpg',
        'https://acre-images.s3.amazonaws.com/image-5b01cdf4b2e9a1526844916.jpg',
        'https://acre-image-collections.s3.amazonaws.com/image-6578722caea701702392364_medium.jpg',
        'https://acre-images.s3.amazonaws.com/image-5ac62b9e561041522936734_medium.jpeg',
        'https://acre-images.s3.amazonaws.com/image-5acac631504581523238449_medium.jpeg',
        'https://acre-image-collections.s3.amazonaws.com/image-65787222618211702392354_medium.jpg',
        'https://acre-image-collections.s3.amazonaws.com/image-657872175b22e1702392343_medium.jpg',
        'https://acre-image-collections.s3.amazonaws.com/image-657871ff7d8401702392319_medium.jpg',
        'https://acre-image-collections.s3.amazonaws.com/image-6576286c7c4b61702242412_medium.jpg',
        'https://acre-image-collections.s3.amazonaws.com/image-6578af5f9af671702408031_medium.jpg',
        'https://acre-images.s3.amazonaws.com/image-5b01cdf4b2e9a1526844916.jpg',
        'https://acre-image-collections.s3.amazonaws.com/image-6578722caea701702392364_medium.jpg',
        'https://acre-images.s3.amazonaws.com/image-5ac62b9e561041522936734_medium.jpeg',
        'https://acre-images.s3.amazonaws.com/image-5acac631504581523238449_medium.jpeg',
        'https://acre-image-collections.s3.amazonaws.com/image-65787222618211702392354_medium.jpg',
        'https://acre-image-collections.s3.amazonaws.com/image-657872175b22e1702392343_medium.jpg',
        'https://acre-image-collections.s3.amazonaws.com/image-657871ff7d8401702392319_medium.jpg',
        'https://acre-image-collections.s3.amazonaws.com/image-6576286c7c4b61702242412_medium.jpg',
        'https://acre-image-collections.s3.amazonaws.com/image-6578af5f9af671702408031_medium.jpg',
        'https://acre-images.s3.amazonaws.com/image-5b01cdf4b2e9a1526844916.jpg'

    ];

    var imageContainer = document.getElementById('image-container');

    images.forEach(function (imageSrc) {
        var lazyImageContainer = document.createElement('div');
        lazyImageContainer.className = 'col-6 col-md-4 col-lg-3 lazy-image-container';
        lazyImageContainer.innerHTML = `
                    <label class="form-check">
                        <input class="form-check-input" type="checkbox" value="">
                        <div class="lazy-image" style="background-image: url('${imageSrc}')"></div>
                    </label>
                `;
        imageContainer.appendChild(lazyImageContainer);

        // Add click event listener to toggle checkbox state
        var checkbox = lazyImageContainer.querySelector('.form-check-input');
        var lazyImage = lazyImageContainer.querySelector('.lazy-image');
        lazyImage.addEventListener('click', function () {
            checkbox.checked = !checkbox.checked;
        });
    });
});