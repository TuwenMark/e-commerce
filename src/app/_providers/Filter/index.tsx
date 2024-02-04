'use client'

import { Dispatch, SetStateAction, createContext, useContext, useState } from 'react'

type FilterContextType = {
  categoryFilters: string[]
  setCategoryFilters: Dispatch<SetStateAction<string[]>>
  sort: string
  setSort: Dispatch<SetStateAction<string>>
}

const FilterContext = createContext<FilterContextType | null>(null)

export const FilterProvider = ({ children }: { children: React.ReactNode }) => {
  const [categoryFilters, setCategoryFilters] = useState<string[]>([])
  const [sort, setSort] = useState<string>('-createdAt')

  return (
    <FilterContext.Provider value={{ categoryFilters, setCategoryFilters, sort, setSort }}>
      {children}
    </FilterContext.Provider>
  )
}

export function useFilterContext() {
  const filterContext = useContext(FilterContext)
  if (!filterContext) {
    throw new Error('useFilterContext must be used within a FilterProvider')
  }
  return filterContext
}
