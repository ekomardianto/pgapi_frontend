const convertIDR = (value: number) => {
    return new Intl.NumberFormat('id-ID', {
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
        useGrouping: true
    }).format(Number(value))
}

export { convertIDR }