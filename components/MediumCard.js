import Image from 'next/image'

const MediumCard = ({img,title}) => {
    return (
        <div className="cursor-pointer my-4 hover:scale-105 transform transition  duration-300 ease-out"> 
            <div className="relative w-72  h-72 ">
                <Image
                 src={img}
                layout="fill"
                 />
            </div>
            <div>
                <h2 className='font-semibold'>{title}</h2>
            </div>
        </div>
    )
}

export default MediumCard

