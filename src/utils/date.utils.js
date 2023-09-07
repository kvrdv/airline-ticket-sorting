const formatDate = (date) => {
    const tempDate1 = `20${date.slice(6, 8)}-${date.slice(
        3,
        5
    )}-${date.slice(0, 2)}`;

    const tempDate2 = new Date(tempDate1).toLocaleDateString('ru-RU', {
        day: 'numeric',
        weekday: 'short',
        year: 'numeric',
        month: 'short',
    });

    const tempDate3 = tempDate2.split(' ');

    const formattedDate = `${tempDate3[1]} ${tempDate3[2].replace(
        /\./g,
        ''
    )} ${tempDate3[3]}, ${tempDate3[0][0].toUpperCase()}${tempDate3[0]
        .slice(1)
        .replace(/,/g, '')}`;

    return formattedDate;
};

export default formatDate;
