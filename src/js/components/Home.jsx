import React from "react";
import Navbar from "./navbar.jsx";
import Jumbotron from "./jumbotron.jsx";
import Card from "./card.jsx";
import Footer from "./footer.jsx";

//create your first component
const Home = () => {
	return (
		<div>
			<Navbar />
			<div className="container">
				<Jumbotron />
					<div>
						<div className="row">
							<div className="col-md-4">
								<Card />
							</div>
							<div className="col-md-4">
								<Card />
							</div>
							<div className="col-md-4">
								<Card />
							</div>
						</div>
					</div>
			</div>
		<Footer />
		</div>
	);
};

export default Home;