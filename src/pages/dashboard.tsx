import UserCard from "../components/user-card"
import img from "../assets/image.png"

const Dashboard = () => {
    return (
        <div className="dashboard">
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