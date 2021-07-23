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
			],
			person: {
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
			people: {
				add: () => {
					const store = getStore();
					console.table(store.person);
					setStore({ people: store.people.concat(store.person) });
				},
				update: () => {},
				delete: id => {
					console.log("DELEETE" + id);
				},
				load: () => {
					fetch()
						.then()
						.then(data => setStore({ people: data.people }));
				}
			},
			person: {
				load: id => {
					setStore({
						person: {
							id: id,
							first_name: "string",
							last_name: "string",
							email: "user@example.com",
							created_at: "2021-07-23T16:39:33.279Z",
							updated_at: "2021-07-23T16:39:33.279Z"
						}
					});
				},
				update: data => {
					const store = getStore();
					setStore({ person: { ...store.person, ...data } });
				},
				reset: () => {
					setStore({ person: {} });
				}
			}
		}
	};
};

export default getState;
