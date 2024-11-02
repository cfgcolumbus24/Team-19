import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MainDrop from "./components/MainDrop";

export default function LessonPlan() {
	const { subject, lessonNumber, planId } = useParams();
	const [plan, setPlan] = useState(null);

	useEffect(() => {
		const fetchPlan = async () => {
			try {
				const response = await fetch(
					`http://localhost:5000/api/lessons/${subject}/${lessonNumber}`
				);
				const data = await response.json();
				const selectedPlan = data.find((p) => p.id === parseInt(planId));
				setPlan(selectedPlan);
			} catch (error) {
				console.error("Error:", error);
			}
		};
		fetchPlan();
	}, [subject, lessonNumber, planId]);

	if (!plan) return <div>Loading...</div>;

	return (
		<div className="lesson-plan">
			<MainDrop />
			<h1>
				{subject} - Lesson {lessonNumber}
			</h1>
			<h2>Author: {plan.author}</h2>
			<div className="plan-content">
				<pre>{JSON.stringify(plan.json_content, null, 2)}</pre>
			</div>
		</div>
	);
}
