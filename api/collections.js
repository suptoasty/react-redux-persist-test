import faunadb, { query } from "faunadb"

const { FAUNADB_SECRET: secret } = process.env

let client

if (secret) {
	client = new faunadb.Client({ secret })
}

export default async (req, res) => {
	try {
		console.log(client)
		let collections = []

		if (!client) {
			return res
				.status(500)
				.json({ error: new Error("Missing secret to connect to FaunaDB") })
		}
		console.log(secret)

		await client
			.paginate(query.Collections())
			.map((ref) => query.Get(ref))
			.each((page) => (collections = collections.concat(page)))
	} catch (error) {
		res.status(500).json({ error })
	}
}
