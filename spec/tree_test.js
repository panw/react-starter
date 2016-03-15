import React from "react"
import ReactDOM from "react-dom"
import TestUtils from "react-addons-test-utils"
import Tree from "../src/components/tree"

describe("Tree", () => {
	let component, renderedDOM

	beforeEach(function() {
		let action = "default", 
				searchAliases = "",
				handleOnSelectionUpdate = function(node) {}
		component = TestUtils.renderIntoDocument(
			<Tree searchAliases={searchAliases} 
								action={action}
								onSelectionUpdate={handleOnSelectionUpdate}/>
		)

		renderedDOM = React.findDOMNode(component)

	})

	it("renders a <Tree/>", () => {
		TestUtils.isDOMComponent(component)
	})

	it("renders several <Node/>", () => {
		TestUtils.scryRenderedDOMComponentsWithClass(component, 'Node')
	})


	// it("renders a <Tree/>", () => {
	// 	const shallowRenderer = TestUtils.createRenderer()

	// 	let action = "default", 
	// 			searchAliases = "",
	// 			handleOnSelectionUpdate = function(node) {}

	// 	shallowRenderer.render(
	// 		<Tree searchAliases={searchAliases} 
	// 							action={action}
	// 							onSelectionUpdate={handleOnSelectionUpdate}/>
	// 	)

	// 	let component = shallowRenderer.getRenderOutput()
	// 	console.log('component', component.state)
	// 	expect(component.type).toBe("svg")
	// })
})