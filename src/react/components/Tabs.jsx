import React, {useEffect, useRef, useState} from "react";


export default function Tabs(props) {
	const [activeTab, setActiveTab] = useState(1);
	const [focusTab, setFocusTab] = useState(false);
	const tablist = useRef();


	useEffect(() => {
		setActiveTab(props.activeTab)

		if (focusTab) {
			tablist.current.children[props.activeTab - 1].focus();
			const timeout = setTimeout(() => {
				setFocusTab(false);
			} , 100);
			return () => clearTimeout(timeout);
		}
	})

	function handeClick(tab) {
		setActiveTab(tab);
		props.handleClickTab(tab);
	}

	function handleKeyDown(e) {
		if (e.key === 'Home') {
			setActiveTab(1);
			props.handleClickTab(1);
			setFocusTab(true);
		} else if (e.key === 'ArrowLeft') {
			setActiveTab(activeTab === activeTab ? activeTab : activeTab - 1);
			props.handleClickTab('prev');
			setFocusTab(true);
		} else if (e.key === 'ArrowRight') {
			setActiveTab(activeTab === props.tabs.length ? activeTab : activeTab + 1);
			props.handleClickTab('next');
			setFocusTab(true);
		}
	}

	return (
		<div className="tabs" role="tablist" ref={tablist}>
			{props.tabs.map((tab, index) => (
				<button
					role="tab"
					tabIndex={activeTab === index + 1 ? 0 : -1}
					aria-selected={activeTab === index + 1}
					aria-controls={`${props.ariaControls}${index + 1}`}
					key={`tab${index}`}
					onClick={() => handeClick(index + 1)}
					onKeyDown={e => handleKeyDown(e)}
				>
					{tab.content ? tab.content : index + 1}
				</button>
			))}
		</div>
	);
}