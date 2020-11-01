const root = document.getElementById('ghibli-app');

async function filmsCards() {
    let response = await fetch('https://ghibliapi.herokuapp.com/films');
    let films = await response.json();

    films.map((movie, index) => {
        const movieCard = document.createElement('div');
        movieCard.setAttribute('class', 'movie-card');

        const leftColumn = document.createElement('div');
        leftColumn.setAttribute('class', 'card-left-column');
        movieCard.appendChild(leftColumn);

        const rightColumn = document.createElement('div');
        rightColumn.setAttribute('class', 'card-right-column');
        movieCard.appendChild(rightColumn);

        const moviePosterBlur = document.createElement('div');
        moviePosterBlur.setAttribute('class', 'card-poster-blur');

        const moviePosterFeature = document.createElement('div');
        moviePosterFeature.setAttribute('class', 'card-poster-container');


        const moviePoster = posterImg[index];

        const posterImageBlur = document.createElement('img');
        posterImageBlur.setAttribute('class', 'card-poster-blur__zoom');
        posterImageBlur.setAttribute('src', moviePoster);
        moviePosterBlur.appendChild(posterImageBlur);

        const posterImage = document.createElement('img');
        posterImage.setAttribute('class', 'card-poster');
        posterImage.setAttribute('src', moviePoster);
        moviePosterFeature.appendChild(posterImage);

        const cardHeader = document.createElement('h1');
        cardHeader.setAttribute('class', 'card-header');
        cardHeader.innerHTML = movie.title;

        const cardDescription = document.createElement('p');
        cardDescription.setAttribute('class', 'card-description');
        cardDescription.innerHTML = `${movie.description}`; 

        const releaseDate = document.createElement('p');
        releaseDate.setAttribute('class', 'card-date');
        releaseDate.innerHTML = `Release Date: ${movie.release_date}`;

        const movieRating = document.createElement('div');
        movieRating.setAttribute('class', 'card-score-container');

        const tomatoLogo = document.createElement('img');
        tomatoLogo.setAttribute('class', 'tomato-logo');
        tomatoLogo.setAttribute('src', 'https://png.pngitem.com/pimgs/s/138-1381056_rotten-tomatoes-fresh-logo-hd-png-download.png');
        movieRating.appendChild(tomatoLogo);

        const rottenTomatoScore = document.createElement('p');
        rottenTomatoScore.setAttribute('class', 'card-score');
        rottenTomatoScore.innerHTML = `${movie.rt_score}%`;
        movieRating.appendChild(rottenTomatoScore);

        root.appendChild(movieCard);
        leftColumn.appendChild(moviePosterBlur);
        leftColumn.appendChild(moviePosterFeature);
        rightColumn.appendChild(cardHeader);
        rightColumn.appendChild(releaseDate);
        rightColumn.appendChild(cardDescription);
        rightColumn.appendChild(movieRating);
        
    })
}

filmsCards();
