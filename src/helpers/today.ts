const today = () => {
    const date = new Date()

    // get the day, month, and year
    const day = date.getDate()
    const month = date.getMonth() + 1
    const year = date.getFullYear()

    // get time 12 hour format
    const time = date.toLocaleString("en-US", {
        hour: "numeric",
        minute: "numeric",
        hour12: true,
    })

    // return a formatted date
    return `${day}-${month}-${year}-${time}`
}

export default today
