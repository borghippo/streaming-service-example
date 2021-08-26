import Image from "next/image"

function Thumbnail({ result }) {
    const BASE_IMG_URL = "https://image.tmdb.org/t/p/original"
    return (
        <div className="p-2 group cursor-pointer transition duration-200 ease-in transform sm:hover:scale-105 hover:z-50">
            <Image layout='responsive' src={`${BASE_IMG_URL}${result.backdrop_path}`} height={1080} width={1920} />

            <div className='p-2'>
                <p className='truncate max-w-md'>{result.overview}</p>
                <h2 className="mt-1 text-2xl text-white">{result.title || result.original_name}</h2>
            </div>
        </div>
    )
}

export default Thumbnail
