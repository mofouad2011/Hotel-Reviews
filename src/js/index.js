//  rendering all UI functions to the APP

class appUI {

    // Passing json for Hotels and builing the UI for it
    static CheckIfData() {
        getData.fetchHotels((error, hotels) => {
            if (error) {
                console.log(error);
            } else {
                this.buildHotels(hotels);
            }
        })
    }

    static buildHotels(hotels) {

        const hotelContainer = document.getElementById('hotels');

        hotels.forEach(hotel => {
            const hotelTag = document.createElement('div');
            hotelTag.classList.add('hotels-card');
            hotelTag.classList.add('col');

            hotelTag.innerHTML = `
                <h1 class="hotels-card-name">${hotel.name}</h1>
                <p class="hotels-card-review">${hotel.totalReviews}</p>
                <p class="hotels-card-score">${hotel.totalScore}<sup>/10</sup></p>
                <p class="hotels-card-price">${hotel.pricePerNight}<sup>/$$</sup></p>
                <span class="hotels-card-more" data-id="${hotel.id}" class="viewHotel" onclick="appUI.getHotelID(event)">View Details</span>
                <img class="hotels-card-img" src="${hotel.photo}" alt="${hotel.name}">
            `;
            hotelContainer.append(hotelTag);
        });
    }

    static getHotelID(e) {
        e.preventDefault();

        let linkEl = e.target;
        let id = linkEl.dataset.id;

        ((callback) => {
            getData.fetchHotelInfo(id, (error,HotelInfo) => {
                if (!HotelInfo) {
                    console.log(error);
                    return
                } else {
                    this.bulidHotelInfo(HotelInfo);
                    this.buildHotelReview(HotelInfo);
                }
            })
        })();
    }

    static clickHotelInfo(id) {
       const myHotlInfo =  getData.fetchHotelInfo(id);
        console.log(myHotlInfo)
    }

    static bulidHotelInfo(HotelInfo) {
        document.getElementById('imgGallery').innerHTML="";
        ImgGallery.createImgGallery(HotelInfo.pictures);
    }

    static buildHotelReview (HotelInfo) {
        document.getElementById('reviews').innerHTML="";
        Reviews.createReviews(HotelInfo.reviews);
    }

    //todo : Make prices / night :D
}


// ** start building the Application

document.addEventListener('DOMContentLoaded', (event) => {
    appUI.CheckIfData();
});

const hotelLinks = document.querySelectorAll('.viewHotel');


