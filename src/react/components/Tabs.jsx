import React, {useState} from "react";


export default function Tabs(props) {
	const [activeTab, setActiveTab] = useState(1);

	function changeTab(tab) {
		setActiveTab(tab);
	}

	return (
		<div className="tabs" role="tablist">
			{props.tabs.map((tab, index) => (
				<button
					type="button"
					role="tab"
					tabIndex={-1}
					aria-selected={activeTab === index + 1}
					aria-controls={`slider-${index + 1}`}
					key={`tab${index}`}
					onClick={() => changeTab(index + 1)}
				>
					{tab.content ? tab.content : index + 1}
				</button>
			))}
		</div>
	);
}