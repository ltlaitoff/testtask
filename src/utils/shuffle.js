const shuffle = arr => {
	for (let i = 0; i < arr.length; i++) {
		const randomIndex = Math.floor(Math.random() * arr.length)
		;[arr[i], arr[randomIndex]] = [arr[randomIndex], arr[i]]
	}

	return [...arr]
}

export default shuffle
