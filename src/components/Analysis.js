import React from "react"

import { Chart } from "react-google-charts"

const Analysis = () => {
	return (
		<div>
			<Chart
				width={"300px"}
				height={"300px"}
				chartType='LineChart'
				loader={<div>Loading Chart</div>}
				data={[
					["x", "dogs"],
					[0, 0],
					[1, 10],
					[2, 23],
					[3, 17],
					[4, 18],
					[5, 9],
					[6, 11],
					[7, 27],
					[8, 33],
					[9, 40],
					[10, 32],
					[11, 35],
				]}
				options={{
					hAxis: {
						title: "Time",
					},
					vAxis: {
						title: "Popularity",
					},
				}}
				rootProps={{ "data-testid": "1" }}
			/>
			<Chart
				width={"300px"}
				height={"300px"}
				chartType='Bar'
				loader={<div>Loading Chart</div>}
				data={[
					["Year", "Sales", "Expenses", "Profit"],
					["2014", 1000, 400, 200],
					["2015", 1170, 460, 250],
					["2016", 660, 1120, 300],
					["2017", 1030, 540, 350],
				]}
				options={{
					// Material design options
					chart: {
						title: "Company Performance",
						subtitle: "Sales, Expenses, and Profit: 2014-2017",
					},
				}}
				// For tests
				rootProps={{ "data-testid": "2" }}
			/>
			<Chart
				width={"300px"}
				height={"300px"}
				chartType='PieChart'
				loader={<div>Loading Chart</div>}
				data={[
					["Task", "Hours per Day"],
					["Work", 11],
					["Eat", 2],
					["Commute", 2],
					["Watch TV", 2],
					["Sleep", 7],
				]}
				options={{
					title: "My Daily Activities",
					// Just add this option
					is3D: true,
				}}
				rootProps={{ "data-testid": "2" }}
			/>
		</div>
	)
}

export default Analysis
