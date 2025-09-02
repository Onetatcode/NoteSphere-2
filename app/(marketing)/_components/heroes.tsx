import Image from "next/image";

export const Heroes = () => {
    return (
        <div className="flex flex-col items-center justify-center
        max-w-5xl">
            <div className="flex items-center">
                <div className="relative w-[300px] h-[300px] sm:w-[350px]
                sm:h-[350px] md:h-[400px] md:w-[300px]">
                    <Image
                    src="/Reading-Expert.png"
                    fill 
                    className="object-contain dark:hidden"
                    alt="documents"
                    />
                    <Image
                    src="/Reading-Expert-inverse.png"
                    fill 
                    className="object-contain hidden dark:block"
                    alt="documents"
                    />
                </div>
                <div className="relative h-[400px] w-[400px] hidden md:block">
                    <Image
                    src="/Leafleting.png"
                    fill 
                    className="object-contain dark:hidden"
                    alt="Reading"
                    />
                    <Image
                    src="/Leafleting-inverse.png"
                    fill 
                    className="object-contain hidden dark:block"
                    alt="Reading"
                    />
                </div>
            </div>
        </div>
    )
}