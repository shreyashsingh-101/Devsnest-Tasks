
const Item = (props) => {
    const {name, calorie} = props;
    return (
        <div className="item">
            <div className="item_name">
                {name}
            </div>
            <div className="calorie_count">
                You have consumed {calorie} Calories today.
            </div>
        </div>
    )
}




const Container = () => {
    return (
        <div className="container">
            <Item name="Pizza" calorie="56" />
            <Item name="Burger" calorie="70" />
            <Item name="Brownie" calorie="180" />
            
           
        </div>
    )
}

export default Container;
