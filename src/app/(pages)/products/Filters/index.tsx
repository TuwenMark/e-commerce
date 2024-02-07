'use client'

import React from 'react'

import { Category } from '../../../../payload/payload-types'
import { Checkbox } from '../../../_components/Checkbox'
import { useFilterContext } from '../../../_providers/Filter'

import classes from './index.module.scss'
import { HR } from '../../../_components/HR'
import { RadioButton } from '../../../_components/Radio'

function Filters({ categories }: { categories: Category[] }) {
  const { categoryFilters, setCategoryFilters, sort, setSort } = useFilterContext()

  const handleCategories = (categoryId: string) => {
    if (categoryFilters.includes(categoryId)) {
      const updatedCategoryFilters = categoryFilters.filter(id => id !== categoryId)
      setCategoryFilters(updatedCategoryFilters)
    } else {
      setCategoryFilters([...categoryFilters, categoryId])
    }
  }
  const handleSort = (value: string) => setSort(value)

  return (
    <div className={classes.filters}>
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
      <HR className={classes.hr} />
      <h6 className={classes.title}>Sort By</h6>
      <div className={classes.categories}>
        <RadioButton
          label="Latest"
          value="-createdAt"
          isSelected={sort === '-createdAt'}
          onRadioChange={handleSort}
          groupName="sort"
        />
        <RadioButton
          label="Oldest"
          value="createdAt"
          isSelected={sort === 'createdAt'}
          onRadioChange={handleSort}
          groupName="sort"
        />
      </div>
    </div>
  )
}

export default Filters
