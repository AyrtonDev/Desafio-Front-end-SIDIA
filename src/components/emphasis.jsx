export function Emphasis ({movies}){
    return(
            <div className="py-6 flex flex-col gap-6">
                <span className="text-white font-semibold text-4xl p-4">Destaques</span>
                <div className="flex gap-6 justify-center">
                    {movies.map((movie, index)=>(
                        <div className="relative flex flex-col items-center gap-6">
                            <img src={"https://image.tmdb.org/t/p/w300" + movie.backdrop_path} alt="post movie" className="w-full h-50 object-cover rounded-lg"/>
                            <div className="absolute text-white bottom-15 left-0 text-9xl font-bold drop-shadow-[0px_0px_5px_black]">
                                {index + 1}
                            </div>
                            <span className="text-white font-semibold text-center text-lg">{movie.title}</span>
                        </div>
                            
                    ))}
                </div>
            </div>
    )

}