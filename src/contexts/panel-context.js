import React, { useEffect, useState, createContext } from "react"
export const PanelContext = createContext()

export function PanelProvider({ allowPanelUpdate = false, children }) {
  const [kids, setKids] = useState([])

  const updateKids = (newKids, id, newProps) =>
    setKids([
      id,
      React.Children.map(newKids, (child, i) => (
        /* maps one or more children */
        <child.type key={i} {...child.props} {...newProps} />
      )),
    ])

  const addKids = (newKids, id = null, newProps) => {
    // 🚧 to pass in different components use the id -- currently untested
    console.log("newkids", newKids)
    if (kids?.length && !allowPanelUpdate) {
      return console.log("🚧 kids exist-noupdate")
    } else if (kids && allowPanelUpdate && id === kids[0]) {
      console.log("🚧 kids exist: allow update, id matched-update")
      return updateKids(newKids, id, newProps)
    } else if (!kids?.length || !kids[0] === id) {
      console.log("kids don't exist and no matching id -update")
      return updateKids(newKids, id, newProps)
    }
  }

  useEffect(() => {
    console.log(kids?.length ? "👶 side has kids" : "🚫 side has no kids", kids)
    return () => null
  }, [kids])

  return (
    <PanelContext.Provider value={{ kids, addKids }}>
      {children}
    </PanelContext.Provider>
  )
}
