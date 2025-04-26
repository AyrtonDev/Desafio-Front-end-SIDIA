export function Released ({movies}){
    return(
        <div className="py-6 flex flex-col gap-6">
            <span className="text-white font-semibold text-4xl p-4">Lançamentos</span>
            <div className="flex gap-6 justify-center">
                {movies.map((movie)=>(
                    <div className=" flex flex-col items-center gap-6">
                        <div>
                            <img src={"https://image.tmdb.org/t/p/w300" + movie.backdrop_path} alt="post movie" className="w-full h-50 object-cover rounded-lg"/>
                            </div>
                        <span className="text-white font-semibold text-center text-lg">{movie.title}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}