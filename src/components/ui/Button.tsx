import React from "react"

type ButtonProps = {
	onClick: any
}

export default function Button(props: ButtonProps) {
	return (
		<>
			<button onClick={props.onClick} />
		</>
	)
}
