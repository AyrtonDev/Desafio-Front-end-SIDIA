export default function ConteredContent({children}){
    return(
        <div className=" min-h-screen w-full flex justify-center bg-black">
            <div className="max-w-7xl h-full w-full flex flex-col">
                {children}
            </div>
        </div>
    )
}