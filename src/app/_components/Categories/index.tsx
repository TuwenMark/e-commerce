import React from 'react'
import Image from 'next/image'

import classes from './index.module.scss'
import { Category } from '../../../payload/payload-types'
import Link from 'next/link'
import CategoryCard from './CategoryCard'

function Categories({ categories }: { categories: Category[] }) {
  return (
    <section className={classes.container}>
      <div className={classes.titleWrapper}>
        <h3>Shop By Categories</h3>
        <Link href="/products" className={classes.link}>
          <p>Show All</p>
          <Image src="/assets/icons/arrow-right.svg" alt="right-arrow" width={24} height={24}/>
        </Link>
      </div>
      <div className={classes.list}>
        {categories?.map(category => (
          <CategoryCard key={category.id} category={category} />
        ))}
      </div>
    </section>
  )
}

export default Categories
