document.addEventListener('DOMContentLoaded', function() {
    const carForm = document.getElementById('car-form');
    const carListings = document.getElementById('car-listings');

    carForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const make = document.getElementById('car-make').value;
        const model = document.getElementById('car-model').value;
        const year = document.getElementById('car-year').value;
        const price = document.getElementById('car-price').value;
        const description = document.getElementById('car-description').value;
        const image = document.getElementById('car-image').files[0];
        
        const reader = new FileReader();
        reader.onload = function() {
            const imgSrc = reader.result;
            const carListing = document.createElement('div');
            carListing.classList.add('car-listing');
            carListing.innerHTML = `
                <h3>${make} ${model} (${year})</h3>
                <p>Price: $${price}</p>
                <p>${description}</p>
                <img src="${imgSrc}" alt="${make} ${model}">
                <div class="car-chat">
                    <input type="text" placeholder="Your message">
                    <button>Send Message</button>
                </div>
            `;
            carListings.appendChild(carListing);
        };
        reader.readAsDataURL(image);
        
        carForm.reset();
    });
});