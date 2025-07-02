type UserCardType = {
    image: string;
    fullname: string;
    role: string;
    todoQuantity: number;
};

const UserCard = ({ image, fullname, role, todoQuantity }: UserCardType) => {
    return (
        <div className="user_card">
            <div className="user_card__block">
                <img className="img" src={image} alt="user image" />
                <div>
                    <h3 className="user_card__fullname">{fullname}</h3>
                    <p className="user_card__role">{role}</p>
                </div>
            </div>
            <div className="user_card__block2">
                <div className="blue_card">
                    <p className="todo_quantity">{todoQuantity}</p>
                </div>
                <div className="yellow_card">
                    <p className="todo_quantity">{todoQuantity}</p>
                </div>
                <div className="green_card">
                    <p className="todo_quantity">{todoQuantity}</p>
                </div>
                <div className="red_card">
                    <p className="todo_quantity">{todoQuantity}</p>
                </div>
            </div>
        </div>
    )
}

export default UserCard