module.exports = {
	roots: ["<rootDir>/src"],
	moduleNameMapper: {
		"@/(.*)": "<rootDir>/src/$1",
	},
	testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$",
	moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
	testEnvironment: "node",
	globals: {
		"ts-jest": {
			diagnostics: {
				warnOnly: true,
			},
		},
	},
	// transform: {
	// 	"^.+\\.(ts|tsx)$": "ts-jest",
	// },

	// Setup Enzyme
	snapshotSerializers: ["enzyme-to-json/serializer"],
	setupFilesAfterEnv: ["<rootDir>/src/setupEnzyme.ts"],
}
