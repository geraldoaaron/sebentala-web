import Link from 'next/link';
export default function PostCard({ post }) {
  return (
    <Link href={`/post/${post.slug}`}>
    <div className='group relative w-full h-[350px] overflow-hidden sm:w-[430px] transition-all px-1'>
       <div className='relative overflow-hidden h-60'>
          
            <img
              src={post.image}
              alt='post cover'
              className='h-[260px] w-[560px] sm:w-full sm:h-full object-cover transition-transform duration-300 group-hover:scale-110'
            />
         
        </div>
      <div className='pt-3 flex items-center'>
        <span className='font-bold text-sm text-cyan-500'>{post.category}</span> 
        <span className="h-3 w-px bg-gray-300 mx-2"></span>
        <span className='font-dancing text-xs'>{new Date(post.updatedAt).toLocaleDateString()}</span>
       
      </div>

      <div className='flex flex-col'>
        <p className='text-lg line-clamp-2 mt-2 font-bold lg:text-xl'>{post.title}</p>
      </div>
    </div>
    </Link>
  );
}