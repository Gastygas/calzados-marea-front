import Image from "next/image";

const Loading = () => {
    return(
        <div className="flex flex-col items-center">
            <Image src={`https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif`} alt="loading" width={100} height={100} />
        </div>
    )
};

export default Loading;