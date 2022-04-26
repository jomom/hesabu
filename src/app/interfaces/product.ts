export interface IProduct {
	name: string
	description: string
	category?:string
	vendor?:string
	price: number
	taxable: boolean
	published: boolean
	costperitem?:number
	quantity: number
	status: string
	image: string
	availability : boolean
	
	createdat: number

}
