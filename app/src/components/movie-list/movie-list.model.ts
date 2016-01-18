export interface FullMovie {
    Actors?: string;
    Awards?:  string;
    BoxOffice?:  string;
    Country?:  string;
    DVD?:  string;
    Director?:  string;
    Genre?:  string;
    Language?:  string;
    Metascore?:  string;
    Plot?:  string;
    Poster?:  string;
    Production?:  string;
    Rated?:  string;
    Released?:  string;
    Response?:  string;
    Runtime?:  string;
    Title?:  string;
    Type?:  string;
    Website?:  string;
    Writer?:  string;
    Year?:  string;
    imdbID?:  string;
    imdbRating?:  string;
    imdbVotes?:  string;
    tomatoConsensus?:  string;
    tomatoFresh?:  string;
    tomatoImage?:  string;
    tomatoMeter?: string;
    tomatoRating?:  string;
    tomatoReviews?:  string;
    tomatoRotten?:  string;
    tomatoURL?:  string;
    tomatoUserMeter?: string;
    tomatoUserRating?:  string;
    tomatoUserReviews?:  string;
}

export interface Search {
    Search: Array<Movie>;
}

export interface Movie {
    imdbID: string;
    Title: string;
    Year: number;
    Type: string;
    Poster: string;
    tomatoRating: number;
    tomatoUserMeter: number;
    imdbRating: number;
}