class imgGallery {

    static createImgGallery(pictures) {

        let bigImgs = [];

        let imgCont = document.getElementById('imgGallery');

        // Create Big img
        let bigImgCont = document.createElement('div');
        bigImgCont.classList.add('gallery-img');

        let bigImg = document.createElement('img');
        bigImg.id = 'bigImg';
        bigImg.src = pictures[0].photo;
        bigImgCont.appendChild(bigImg);
        imgCont.appendChild(bigImgCont);

        // create images for thumbs
        let thumbsBar = document.createElement('div');
        thumbsBar.id = 'thumbsBar';
        thumbsBar.className = 'gallery-bar';


        for (let thumb = 0; thumb < pictures.length; thumb++) {
            let Img = document.createElement('img');
            Img.src = pictures[thumb].thumbnail;
            thumbsBar.appendChild(Img);

            Img.addEventListener('click', () => {
                this.changeImg(event, pictures);
            })
        }
        imgCont.appendChild(thumbsBar);
    }

    static changeImg(e, pictures) {
        let thumSrc = e.target.src;

        let imgSrc = pictures.find(el => {
            return el.thumbnail === thumSrc
        }).photo;
        bigImg.src = "";
        bigImg.src = imgSrc;
    }

    // todo : Make animation fadding image in & out;
    // todo : Adjust the bar for thumbs
}
