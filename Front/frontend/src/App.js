import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SubjectButtons from "./components/subjectbutton";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
	return (
		<Router>
			<div>
				<h1>Subject Links</h1>
				<SubjectButtons />
				<Routes>
					<Route path="/math" element={<div>Math Repository</div>} />
					<Route path="/science" element={<div>Science Repository</div>} />
					<Route path="/history" element={<div>History Repository</div>} />
					<Route path="/english" element={<div>English Repository</div>} />
				</Routes>
			</div>
		</Router>
	);
}

export default App;
