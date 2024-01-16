import React from 'react'

const Donut = ({ className }) => {
    return (
        <div className={`${className} absolute overflow-hidden`}>
            <img className='w-full h-full object-cover' src='https://s3-alpha-sig.figma.com/img/7618/f9c5/180c380e885c244c15adbf2e5e65c8df?Expires=1706486400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Z61bnFKk7r-IxMdmpXSYgQZGlA1Fn6ZcOFuXdHxDDY1-dj9n93izFTh6YKpIorvzoycWWHcUHYznHCnOQySlecVW-7klX6eiY~Rujx-d2TAtRmq1k56kQKXi7T2eIoA3SVm3YBtHKqM5lHA7mVeiZ0KnnlUvIYwARPtarC6s5P80urbJ6zPe1JVF-AXZv-fuy6zHMxp8OVfX4HNUs4w7d4x4Aq4w7oiJTzNYcNh~Z6lQj0oPfPOD9lNMnrHe1TX4PxtjvqqVnEFOOBK5UIjqrEgr1L~aXLd7feoVuK-tJpIf5NFRjOUZM9CK9SLeoRdyqhBu-gQ70RwzLz4TgWWYYQ__' alt='Donut' />
        </div>
    )
}

export default Donut