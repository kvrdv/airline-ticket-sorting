const filterData = (filters, data) => {
    let newData = [];
    let newDataAll = [];
    let newData0 = [];
    let newData1 = [];
    let newData2 = [];
    let newData3 = [];

    if (filters.filterAll) {
        newDataAll = data.tickets.filter((ticket) => ticket.stops >= 0);
    }

    if (filters.filter0) {
        newData0 = data.tickets.filter((ticket) => ticket.stops === 0);
    }

    if (filters.filter1) {
        newData1 = data.tickets.filter((ticket) => ticket.stops === 1);
    }

    if (filters.filter2) {
        newData2 = data.tickets.filter((ticket) => ticket.stops === 2);
    }

    if (filters.filter3) {
        newData3 = data.tickets.filter((ticket) => ticket.stops === 3);
    }

    newData = [
        ...newDataAll,
        ...newData0,
        ...newData1,
        ...newData2,
        ...newData3,
    ];

    return newData;
};

export default filterData;