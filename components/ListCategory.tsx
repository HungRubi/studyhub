import Link from "next/link";
import Image from "next/image";
import Wrapper from "./Wrapper";
const ListCategory = () => {
    return (
        <div className="w-full">
            <div className="flex items-center justify-between my-5">
                <h2 className="text-2xl! text-main font-semibold">Objects</h2>
                <Link 
                    href={"/"} 
                    className="mt-0! bg-transparent! shadow-none! text-sm! hover:underline duration-300 font-medium! px-0! text-main"
                >
                    View all
                </Link>
            </div>
            <Wrapper className="w-full flex items-center gap-5 flex-wrap">
                <div className="w-[calc(50%-10px)]">
                    <div className="w-full relative">
                        <Image
                            src={"/images/computer_version.jpg"}
                            alt="object"
                            width={600}
                            height={270}
                            className="w-full object-contain shadow rounded-lg"
                        />
                        <div className="absolute bottom-0 left-0 p-5">
                            <h3 className="text-white text-2xl font-semibold w-full">Physics</h3>
                            <p className="text-sm text-white">Image Processing, Artificial Intelligence</p>
                        </div>
                    </div>
                </div>
                <div className="w-[calc(50%-10px)]">
                    <div className="w-full relative">
                        <Image
                            src={"/images/computer_version.jpg"}
                            alt="object"
                            width={600}
                            height={270}
                            className="w-full object-contain shadow rounded-lg"
                        />
                        <div className="absolute bottom-0 left-0 p-5">
                            <h3 className="text-white text-2xl font-semibold w-full">Physics</h3>
                            <p className="text-sm text-white">Image Processing, Artificial Intelligence</p>
                        </div>
                    </div>
                </div>
            </Wrapper>
        </div>
    )
}

export default ListCategory;