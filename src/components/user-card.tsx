import type { UserCardType } from "../types"

const UserCard = ({ image, fullname, role, todoQuantity }: UserCardType) => {
    return (
        <div className="flex flex-col gap-[25px] max-w-[609px] max-h-[301px] rounded-[40px] px-[16px] py-[30px] bg-[#1c1c1e] border-solid border-1 border-[#777]">
            <div className="flex gap-[30px]">
                <img className="rounded-[12px] w-[147px] h-[100px]" src={image} alt="user image" />
                <div>
                    <h3 className="second-family text-white font-black text-[36px] leading-[140%] text-center">{fullname}</h3>
                    <p className=" second-family text-[#bbb] font-black text-[20px] leading-[140%] text-center ">{role}</p>
                </div>
            </div>
            <div className="flex gap-[15px]">
                <div className="bg-[#b0d6ff] p-[2px] rounded-2xl w-[131px] h-[98px]">
                    <p className="font-family font-semibold text-[64px] text-center text-[#000]">{todoQuantity}</p>
                </div>
                <div className="bg-[#fdbf01] p-[2px] rounded-2xl w-[131px] h-[98px]">
                    <p className="font-family font-semibold text-[64px] text-center text-[#000]">{todoQuantity}</p>
                </div>
                <div className="bg-[#9ad573] p-[2px] rounded-2xl w-[131px] h-[98px]">
                    <p className="font-family font-semibold text-[64px] text-center text-[#000]">{todoQuantity}</p>
                </div>
                <div className="bg-[#ff4646] p-[2px] rounded-2xl w-[131px] h-[98px]">
                    <p className="font-family font-semibold text-[64px] text-center text-[#000]">{todoQuantity}</p>
                </div>
            </div>
        </div>
    )
}

export default UserCard