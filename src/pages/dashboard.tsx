import UserCard from "../components/user-card"
import img from "../assets/image.png"

const Dashboard = () => {
    return (
        <div className="bg-[black] h-vh p-[20px] grid grid-cols-3 gap-[10px]">
            <UserCard image={img} fullname="A.Abrorbek" role="Project manager" todoQuantity={30} />
            <UserCard image={img} fullname="A.Abrorbek" role="Project manager" todoQuantity={30} />
            <UserCard image={img} fullname="A.Abrorbek" role="Project manager" todoQuantity={30} />
            <UserCard image={img} fullname="A.Abrorbek" role="Project manager" todoQuantity={30} />
            <UserCard image={img} fullname="A.Abrorbek" role="Project manager" todoQuantity={30} />
            <UserCard image={img} fullname="A.Abrorbek" role="Project manager" todoQuantity={30} />
            <UserCard image={img} fullname="A.Abrorbek" role="Project manager" todoQuantity={30} />
            <UserCard image={img} fullname="A.Abrorbek" role="Project manager" todoQuantity={30} />
            <UserCard image={img} fullname="A.Abrorbek" role="Project manager" todoQuantity={30} />
        </div>
    )
}

export default Dashboard