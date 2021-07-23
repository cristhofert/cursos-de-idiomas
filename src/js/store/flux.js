const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			people: [
				{
					id: 0,
					first_name: "string",
					last_name: "string",
					email: "user@example.com",
					created_at: "2021-07-23T16:39:33.279Z",
					updated_at: "2021-07-23T16:39:33.279Z",
					courses: [
						{
							id: 0,
							name: "string",
							language_code: "string",
							level_id: 0,
							created_at: "2021-07-23T16:39:33.279Z",
							updated_at: "2021-07-23T16:39:33.279Z",
							level: {
								id: 0,
								name: "string"
							},
							language: {
								code: "string",
								name: "string"
							}
						}
					]
				}
			]
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},
			loadPeople: () => {
				/**
					fetch().then().then(data => setStore({ "people": data.people }))
				*/
				fetch()
					.then()
					.then(data => setStore({ people: data.people }));
			},
			removePeople: index => {
				console.log("DELEETE" + index);
			}
		}
	};
};

export default getState;
