const capitalizeWord = (string) => {
	return string
		.toLowerCase()
		.split(' ')
		.map((word) => word[0].toUpperCase() + word.slice(1)).join();
};

const capitalizeSentence = (sentence) => {
	return sentence
		.toLowerCase()
        .charAt(0).toUpperCase() + sentence.slice(1) + '.';
};

export { capitalizeWord, capitalizeSentence };
