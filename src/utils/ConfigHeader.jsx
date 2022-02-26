
let navarray = []
export const getHeadData = (data) => {
    navarray = data.map((ele, i) => (
        {
            title: ele.title,
            submenu: ele.firstLevelDropdown && Object.values(ele.firstLevelDropdown).map(items => {
                // console.log("first drop down", items)
                return (

                    items.map(firstLevelDropitem => ({
                        title: firstLevelDropitem.title,
                        submenu: firstLevelDropitem.secondLevelDropdown &&
                            Object.values(firstLevelDropitem.secondLevelDropdown).map(second => {
                                // console.log(" Second level Drop down", second)
                                return (
                                    second.map(secondDropDown => ({
                                        title: secondDropDown.title,
                                        submenu: secondDropDown.thirdLevelSubmenu &&
                                            Object.values(secondDropDown.thirdLevelSubmenu).map(third => {
                                                // console.log("--- Third Level ---", third)
                                                return (
                                                    third.map(thirdLevelDropdown => ({
                                                        title: thirdLevelDropdown.title
                                                        //here you can add more submenu
                                                    }))
                                                )
                                            })
                                    }))
                                )
                            })
                    }))
                )
            }
            )
        }
    )
    )
    return navarray
    // console.log("- ----  nav arra ", navarray)
}
