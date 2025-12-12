import Image from "next/image";
import { FC } from "react";
import Link from "next/link";

type DocumentProps = {
    className?: string; 
};

const Document: FC<DocumentProps> = ({className}) => {
    return (
        <div className="w-full">
            <div className="w-full relative">
                <Link href={`/documents/computer-version`}>
                    <Image
                        src={"/images/computer_version.jpg"}
                        alt="object"
                        width={600}
                        height={270}
                        className={`w-full object-cover shadow rounded-lg ${className}`}
                    />
                </Link>
                <div className="absolute bottom-0 left-0 p-5">
                    <h3 className="text-white text-2xl font-semibold w-full">Computer Version</h3>
                    <p className="text-sm text-white">Image Processing, Artificial Intelligence</p>
                </div>
            </div>
        </div>
    )
}

export default Document;