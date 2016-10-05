var Xray = require('x-ray');
var x = Xray();

// 1st argument: URL you want to scrape
// 2nd argument: the selector that you want to grab
// 3rd argument: the array containing object of what you want to be passed on
//look inside this list of mb-movies, because that is the class names that the movie sections are under

x('http://pokemondb.net/pokedex/national', '.infocard-tall-list', [{
	Pokemon: x('.infocard-tall', [{
		Name: '.infocard-tall .ent-name',
		Type: '.infocard-tall .aside',
		// link: '.movie_info a@href',
		// year: '.lister-item-year',
		// rank: '.lister-item-index',
		// rating: '.ratings-imdb-rating strong',
		// thumbnail: '.lister-item-image img@src',
		// genre: ['.genre'],
		// people: x('.lister-item-content p a', [{
		// 	name: '',
		// 	link: '@href'
		// }]),
		// poster: x('.lister-item-header a@href', 'head meta[property="og:image"]@content')
	}])
}])
	// .paginate('a.lister-page-next.next-page@href')
	// .limit(20)
    .write('results.json');