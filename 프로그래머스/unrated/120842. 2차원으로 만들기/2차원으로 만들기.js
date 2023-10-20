function solution(num_list, n) {
    const result = [];

    for (let i = 0; i < num_list.length; i += n) {
        const row = num_list.slice(i, i + n);
        const remainder = n - row.length;
        if (remainder > 0) {
            row.push(...Array.from({length: remainder}, () => 0));
        }
        result.push(row);
    }

    return result;
}