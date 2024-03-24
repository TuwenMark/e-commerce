'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ChangeEvent, useState } from 'react'
import { Media } from '../../../_components/Media'
import { Price } from '../../../_components/Price'
import { RemoveFromCartButton } from '../../../_components/RemoveFromCartButton'
import classes from './index.module.scss'

function CartItem({ product, title, metaImage, qty, addItemToCart }) {
  const [quantity, setQuantity] = useState(qty)

  const incrementQty = () => {
    const updatedQty = quantity + 1
    setQuantity(updatedQty)
    addItemToCart({ product, quantity: quantity })
  }

  const decrementQty = () => {
    const updatedQty = quantity > 1 ? quantity - 1 : 1
    setQuantity(updatedQty)
    addItemToCart({ product, quantity: quantity })
  }

  const enterQty = (e: ChangeEvent<HTMLInputElement>) => {
    const updatedQty = parseInt(e.target.value)
    setQuantity(updatedQty)
    addItemToCart({ product, quantity: quantity })
  }

  return (
    <li className={classes.item} key={title}>
      <Link href={`/products/${product.slug}`} className={classes.mediaWrapper}>
        {!metaImage && <span>No Image</span>}
        {metaImage && typeof metaImage !== 'string' && (
          <Media className={classes.media} imgClassName={classes.image} resource={metaImage} fill />
        )}
      </Link>

      <div className={classes.itemDetails}>
        <div className={classes.titleWrapper}>
          <h6>{title}</h6>
          <Price product={product} button={false} />
        </div>

        <div className={classes.quantity}>
          <div className={classes.quantityBtn} onClick={decrementQty}>
            <Image
              src="/assets/icons/minus.svg"
              alt="minus"
              width={24}
              height={24}
              className={classes.qtnBt}
            />
          </div>

          <input
            type="text"
            value={quantity}
            className={classes.quantityInput}
            onChange={enterQty}
          />

          <div className={classes.quantityBtn} onClick={incrementQty}>
            <Image
              src="/assets/icons/plus.svg"
              alt="plus"
              width={24}
              height={24}
              className={classes.qtnBt}
            />
          </div>
        </div>
      </div>

      <div className={classes.subtotalWrapper}>
        <Price product={product} quantity={quantity} button={false} />
        <RemoveFromCartButton product={product} />
      </div>
    </li>
  )
}

export default CartItem