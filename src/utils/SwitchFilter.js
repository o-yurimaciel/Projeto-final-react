export default function SwitchFilter(list, currentFilter) {
    switch(currentFilter) {
      case "all":
        return list
        case "todo":
          return list.filter((item) => {
            return item.completed === false
          })
          case "done":
            return list.filter((item) => {
              return item.completed === true
            })
      default: throw new Error()
    }
}
