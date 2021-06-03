import { Card, CardContent, Typography } from "@material-ui/core"
import React, { Component } from "react"
import theme from "@/theme"

export type PostProps = {
	atricle: Object
}

const styles = {
	root: {
		minWidth: 275,
	},
	bullet: {
		display: "inline-block",
		margin: "0 2px",
		transform: "scale(0.8)",
	},
	title: {
		fontSize: 14,
	},
	pos: {
		marginBottom: 12,
	},
}

export class Post extends Component<any> {
	constructor(props: any) {
		super(props)
	}

	render() {
		return (
			<Card>
				<CardContent>{this.props && this.props?.title}`</CardContent>
			</Card>
		)
	}
}

export default Post
