// Isogram 5kyu
export function isIsogram(str: string): boolean {
	const arr: string[] = [...str.toLowerCase()];
	const final: string[] = [];
	for (let letter of arr) {
		if (final.includes(letter)) {
			return false;
		}
		final.push(letter);
	}
	return true;
}
