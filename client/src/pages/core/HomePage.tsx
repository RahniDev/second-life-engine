import { Link } from "react-router-dom";

const HomePage = () => {
    return (
        <div>
            <h1>Second-Life Engine</h1>

            <p>Don't throw it away.<br />
                Find another use for it.</p>

            <Link to="/add-item">Add an object</Link>

            <Link to="/my-inventory">My inventory</Link>
        </div>
    );
}

export default HomePage;