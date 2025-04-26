export function Wellcome(){
    return(
        <div className="relative w-full h-[500px] flex justify-center items-center">
            <div className="absolute bg-[url('./src/assets/img/bg.png')] bg-cover bg-center w-full h-[500px]"></div>
            <div className="absolute inset-0 bg-black/75"></div>
            <div className="relative text-white w-full flex flex-col items-center justify-center gap-6">
                <span className="text-5xl font-semibold brightness-100">Bem-Vindo ao CineVerse</span>
                <span className="text-2xl">Prepara a pipoca e bora Maratonar!</span>
            </div>
        </div>
    )
}