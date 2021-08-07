import React, { useEffect, useRef, useState } from "react"
import ColumnResizer from "column-resizer"
import { Table } from "react-bootstrap"

const ResizableTable = ({ children, resizable, resizeOptions }) => {
	const tableRef = useRef(null)

	const [resize, setResize] = useState()

	const enableResize = () => {
		if (!resize) {
			const resizeFn = new ColumnResizer(tableRef.current, resizeOptions)

			//@ts-ignore
			tableRef.current.className = tableRef.current?.className?.replace(
				"grip-padding",
				""
			)

			setResize(resizeFn)
		} else {
			resize?.reset(resizeOptions)
		}
	}

	const disableResize = () => {
		if (!!resize) {
			resize?.reset({ disable: true })
		}
	}

	useEffect(() => {
		if (tableRef.current && resizable) {
			enableResize()
		}
		// eslint-disable-next-line
	}, [tableRef])

	useEffect(() => {
		return disableResize()
		// eslint-disable-next-line
	}, [])

	return (
		<Table bordered responsive striped hover ref={tableRef}>
			{children}
		</Table>
	)
}

export default ResizableTable