'use client'

import React from 'react'

import { Category } from '../../../../payload/payload-types'
import { Checkbox } from '../../../_components/Checkbox'
import { useFilterContext } from '../../../_providers/Filter'

import classes from './index.module.scss'

function Filters({ categories }: { categories: Category[] }) {
  const { categoryFilters, setCategoryFilters, sort, setSort } = useFilterContext()

  const handleCategories = () => {}

  return (
    <div className={classes.Filters}>
      <h6 className={classes.title}>Product Categories</h6>
      <div className={classes.categories}>
        {categories.map(category => {
          const isSelected = categoryFilters.includes(category.id)
          return (
            <Checkbox
              key={category.id}
              label={category.title}
              value={category.id}
              isSelected={isSelected}
              onClickHandler={handleCategories}
            />
          )
        })}
      </div>
    </div>
  )
}

export default Filters
