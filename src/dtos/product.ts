import { ReactNode } from 'react'

export interface Product {
	id: string
	name: string
	description: string
	tags: string[]
	price: number
	image: ReactNode
}
