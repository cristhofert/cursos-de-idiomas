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
			},
			courses: [
				{
					id: 0,
					name: "string",
					language_code: "string",
					level_id: 0,
					created_at: "2021-07-23T21:24:52.805Z",
					updated_at: "2021-07-23T21:24:52.805Z",
					level: {
						id: 0,
						name: "string"
					},
					language: {
						code: "string",
						name: "string"
					}
				}
			],
			languages: [
				{
					code: "string",
					name: "string"
				}
			],
			levels: [
				{
					code: "string",
					name: "string"
				}
			],
			selectedCourse: 1
		},
		actions: {
			loadCourses: () => {
				var myHeaders = new Headers();
				myHeaders.append(
					"Cookie",
					"XSRF-TOKEN=eyJpdiI6IldHRXc2bmwwdGdqVkMzSVRiRWdYXC9BPT0iLCJ2YWx1ZSI6Inlxc1dIbGRVZ1hjNUw3MXR0d3psRzFTdU5HKzYxS3V2T3d3M0JjWTJrM3dBR2oxellGMW1NQTFiaFFIWFlvd1YiLCJtYWMiOiI1MDlhZmYxMzUyNzc0YTBiZDA1NzQ0ODJkMWVjYWZkYWRlOWM4ODE1Njg3MTBlMjgxMzY0MmEwMDVhNTAxNjIxIn0%3D; laravel_session=eyJpdiI6IlpXT3lNOVk1RVg0eEMraDlGOHdNcEE9PSIsInZhbHVlIjoiRjZjS0JuMXMwZjF0K05KOVFYd1h1SzNRd0d6WTlnQjVjc0w4R3pBQmhSUGl6SitZTkVvbWR6VFhJNDdcL1NDd0IiLCJtYWMiOiI5MGU5OTE3YTAyYTM1ZWM1ZTY1ZGFhYjMxYjE0N2FmZTUxYTA2OTBkODI0NDBkYmYxYjVhMGMxNmI0ODA5MDVjIn0%3D"
				);

				var requestOptions = {
					method: "GET",
					headers: myHeaders,
					redirect: "follow"
				};

				fetch(`${process.env.API}/api/courses`, requestOptions)
					.then(response => response.json())
					.then(result => setStore({ courses: result }))
					.catch(error => console.log("error", error));
			},
			loadLanguages: () => {
				var myHeaders = new Headers();
				myHeaders.append(
					"Cookie",
					"XSRF-TOKEN=eyJpdiI6IldHRXc2bmwwdGdqVkMzSVRiRWdYXC9BPT0iLCJ2YWx1ZSI6Inlxc1dIbGRVZ1hjNUw3MXR0d3psRzFTdU5HKzYxS3V2T3d3M0JjWTJrM3dBR2oxellGMW1NQTFiaFFIWFlvd1YiLCJtYWMiOiI1MDlhZmYxMzUyNzc0YTBiZDA1NzQ0ODJkMWVjYWZkYWRlOWM4ODE1Njg3MTBlMjgxMzY0MmEwMDVhNTAxNjIxIn0%3D; laravel_session=eyJpdiI6IlpXT3lNOVk1RVg0eEMraDlGOHdNcEE9PSIsInZhbHVlIjoiRjZjS0JuMXMwZjF0K05KOVFYd1h1SzNRd0d6WTlnQjVjc0w4R3pBQmhSUGl6SitZTkVvbWR6VFhJNDdcL1NDd0IiLCJtYWMiOiI5MGU5OTE3YTAyYTM1ZWM1ZTY1ZGFhYjMxYjE0N2FmZTUxYTA2OTBkODI0NDBkYmYxYjVhMGMxNmI0ODA5MDVjIn0%3D"
				);

				var requestOptions = {
					method: "GET",
					headers: myHeaders,
					redirect: "follow"
				};

				fetch(`${process.env.API}/api/languages`, requestOptions)
					.then(response => response.json())
					.then(result => setStore({ languages: result }))
					.catch(error => console.log("error", error));
			},
			loadLevels: () => {
				var myHeaders = new Headers();
				myHeaders.append(
					"Cookie",
					"XSRF-TOKEN=eyJpdiI6IldHRXc2bmwwdGdqVkMzSVRiRWdYXC9BPT0iLCJ2YWx1ZSI6Inlxc1dIbGRVZ1hjNUw3MXR0d3psRzFTdU5HKzYxS3V2T3d3M0JjWTJrM3dBR2oxellGMW1NQTFiaFFIWFlvd1YiLCJtYWMiOiI1MDlhZmYxMzUyNzc0YTBiZDA1NzQ0ODJkMWVjYWZkYWRlOWM4ODE1Njg3MTBlMjgxMzY0MmEwMDVhNTAxNjIxIn0%3D; laravel_session=eyJpdiI6IlpXT3lNOVk1RVg0eEMraDlGOHdNcEE9PSIsInZhbHVlIjoiRjZjS0JuMXMwZjF0K05KOVFYd1h1SzNRd0d6WTlnQjVjc0w4R3pBQmhSUGl6SitZTkVvbWR6VFhJNDdcL1NDd0IiLCJtYWMiOiI5MGU5OTE3YTAyYTM1ZWM1ZTY1ZGFhYjMxYjE0N2FmZTUxYTA2OTBkODI0NDBkYmYxYjVhMGMxNmI0ODA5MDVjIn0%3D"
				);

				var requestOptions = {
					method: "GET",
					headers: myHeaders,
					redirect: "follow"
				};

				fetch(`${process.env.API}/api/levels`, requestOptions)
					.then(response => response.json())
					.then(result => setStore({ levels: result }))
					.catch(error => console.log("error", error));
			},
			people: {
				add: () => {
					const store = getStore();
					var myHeaders = new Headers();
					myHeaders.append("Content-Type", "application/json");
					myHeaders.append(
						"Cookie",
						"XSRF-TOKEN=eyJpdiI6IldHRXc2bmwwdGdqVkMzSVRiRWdYXC9BPT0iLCJ2YWx1ZSI6Inlxc1dIbGRVZ1hjNUw3MXR0d3psRzFTdU5HKzYxS3V2T3d3M0JjWTJrM3dBR2oxellGMW1NQTFiaFFIWFlvd1YiLCJtYWMiOiI1MDlhZmYxMzUyNzc0YTBiZDA1NzQ0ODJkMWVjYWZkYWRlOWM4ODE1Njg3MTBlMjgxMzY0MmEwMDVhNTAxNjIxIn0%3D; laravel_session=eyJpdiI6IlpXT3lNOVk1RVg0eEMraDlGOHdNcEE9PSIsInZhbHVlIjoiRjZjS0JuMXMwZjF0K05KOVFYd1h1SzNRd0d6WTlnQjVjc0w4R3pBQmhSUGl6SitZTkVvbWR6VFhJNDdcL1NDd0IiLCJtYWMiOiI5MGU5OTE3YTAyYTM1ZWM1ZTY1ZGFhYjMxYjE0N2FmZTUxYTA2OTBkODI0NDBkYmYxYjVhMGMxNmI0ODA5MDVjIn0%3D"
					);

					var raw = JSON.stringify(store.person);

					var requestOptions = {
						method: "POST",
						headers: myHeaders,
						body: raw,
						redirect: "follow"
					};

					return fetch(`${process.env.API}/api/people`, requestOptions)
						.then(response => response.json())
						.then(result => console.table(result))
						.catch(error => console.log("error", error));
				},
				update: () => {
					const store = getStore();
					var myHeaders = new Headers();
					myHeaders.append("Content-Type", "application/json");
					myHeaders.append(
						"Cookie",
						"XSRF-TOKEN=eyJpdiI6IldHRXc2bmwwdGdqVkMzSVRiRWdYXC9BPT0iLCJ2YWx1ZSI6Inlxc1dIbGRVZ1hjNUw3MXR0d3psRzFTdU5HKzYxS3V2T3d3M0JjWTJrM3dBR2oxellGMW1NQTFiaFFIWFlvd1YiLCJtYWMiOiI1MDlhZmYxMzUyNzc0YTBiZDA1NzQ0ODJkMWVjYWZkYWRlOWM4ODE1Njg3MTBlMjgxMzY0MmEwMDVhNTAxNjIxIn0%3D; laravel_session=eyJpdiI6IlpXT3lNOVk1RVg0eEMraDlGOHdNcEE9PSIsInZhbHVlIjoiRjZjS0JuMXMwZjF0K05KOVFYd1h1SzNRd0d6WTlnQjVjc0w4R3pBQmhSUGl6SitZTkVvbWR6VFhJNDdcL1NDd0IiLCJtYWMiOiI5MGU5OTE3YTAyYTM1ZWM1ZTY1ZGFhYjMxYjE0N2FmZTUxYTA2OTBkODI0NDBkYmYxYjVhMGMxNmI0ODA5MDVjIn0%3D"
					);

					var raw = JSON.stringify(store.person);

					var requestOptions = {
						method: "PUT",
						headers: myHeaders,
						body: raw,
						redirect: "follow"
					};

					return fetch(`${process.env.API}/api/people/${store.person.id}`, requestOptions)
						.then(response => response.json())
						.then(result => console.table(result))
						.catch(error => console.log("error", error));
				},
				delete: id => {
					var requestOptions = {
						method: "DELETE",
						body: "",
						redirect: "follow"
					};

					return fetch(`${process.env.API}/api/people/${id}`, requestOptions)
						.then(response => response.text())
						.then(result => console.log(result))
						.catch(error => console.log("error", error));
				},
				load: () => {
					var myHeaders = new Headers();
					myHeaders.append(
						"Cookie",
						"XSRF-TOKEN=eyJpdiI6IldHRXc2bmwwdGdqVkMzSVRiRWdYXC9BPT0iLCJ2YWx1ZSI6Inlxc1dIbGRVZ1hjNUw3MXR0d3psRzFTdU5HKzYxS3V2T3d3M0JjWTJrM3dBR2oxellGMW1NQTFiaFFIWFlvd1YiLCJtYWMiOiI1MDlhZmYxMzUyNzc0YTBiZDA1NzQ0ODJkMWVjYWZkYWRlOWM4ODE1Njg3MTBlMjgxMzY0MmEwMDVhNTAxNjIxIn0%3D; laravel_session=eyJpdiI6IlpXT3lNOVk1RVg0eEMraDlGOHdNcEE9PSIsInZhbHVlIjoiRjZjS0JuMXMwZjF0K05KOVFYd1h1SzNRd0d6WTlnQjVjc0w4R3pBQmhSUGl6SitZTkVvbWR6VFhJNDdcL1NDd0IiLCJtYWMiOiI5MGU5OTE3YTAyYTM1ZWM1ZTY1ZGFhYjMxYjE0N2FmZTUxYTA2OTBkODI0NDBkYmYxYjVhMGMxNmI0ODA5MDVjIn0%3D"
					);

					var requestOptions = {
						method: "GET",
						headers: myHeaders,
						redirect: "follow"
					};

					fetch(`${process.env.API}/api/people`, requestOptions)
						.then(response => response.json())
						.then(result => setStore({ people: result.data }))
						.catch(error => console.log("error", error));
				}
			},
			person: {
				load: id => {
					var myHeaders = new Headers();
					myHeaders.append(
						"Cookie",
						"XSRF-TOKEN=eyJpdiI6IldHRXc2bmwwdGdqVkMzSVRiRWdYXC9BPT0iLCJ2YWx1ZSI6Inlxc1dIbGRVZ1hjNUw3MXR0d3psRzFTdU5HKzYxS3V2T3d3M0JjWTJrM3dBR2oxellGMW1NQTFiaFFIWFlvd1YiLCJtYWMiOiI1MDlhZmYxMzUyNzc0YTBiZDA1NzQ0ODJkMWVjYWZkYWRlOWM4ODE1Njg3MTBlMjgxMzY0MmEwMDVhNTAxNjIxIn0%3D; laravel_session=eyJpdiI6IlpXT3lNOVk1RVg0eEMraDlGOHdNcEE9PSIsInZhbHVlIjoiRjZjS0JuMXMwZjF0K05KOVFYd1h1SzNRd0d6WTlnQjVjc0w4R3pBQmhSUGl6SitZTkVvbWR6VFhJNDdcL1NDd0IiLCJtYWMiOiI5MGU5OTE3YTAyYTM1ZWM1ZTY1ZGFhYjMxYjE0N2FmZTUxYTA2OTBkODI0NDBkYmYxYjVhMGMxNmI0ODA5MDVjIn0%3D"
					);

					var requestOptions = {
						method: "GET",
						headers: myHeaders,
						redirect: "follow"
					};

					fetch(`${process.env.API}/api/people/${id}`, requestOptions)
						.then(response => response.json())
						.then(result => {
							console.table(result);
							setStore({ person: result });
						})

						.catch(error => console.log("error", error));
				},
				update: data => {
					const store = getStore();
					setStore({ person: { ...store.person, ...data } });
					console.table("update", data);
				},
				reset: () => {
					setStore({
						person: {
							first_name: "",
							last_name: "",
							email: "",
							courses: []
						}
					});
				},
				deleteCourse: id => {
					const store = getStore();
					store.person.courses = store.person.courses.filter(course => course.id !== id);
					setStore({ person: store.person });
				},
				addCourse: () => {
					const store = getStore();
					const courses = store.person.courses.filter(course => {
						return course.id == store.courses[store.selectedCourse].id;
					});
					console.log("courses", courses);
					if (courses.length === 0) {
						store.person.courses = [...store.person.courses, store.courses[store.selectedCourse]];
						setStore({ person: store.person });
					}
				}
			},
			setSelectedCourse: event => {
				console.log("setSelectedCourse", event);
				const store = getStore();
				setStore({ selectedCourse: event.target.value });
				console.log("SLECETOR" + store.selectedCourse);
			}
		}
	};
};

export default getState;
