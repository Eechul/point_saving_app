interface ProductCardProps {
  product: any;
}

export default function ProductCard({ product }: ProductCardProps) {

  return (
    <div className='flex flex-col'>
      <div className='aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75'>
        <img src={product.imageUrl} className='object-cover object-center' />
      </div>
      <div>{product.name}</div>
      <div>{product.point}P</div>
      <div className='flex'>
        <button>+</button>
        <span>2</span>
        <button>-</button>
      </div>
    </div>
  )
}