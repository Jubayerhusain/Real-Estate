import React from 'react'
import Card from './../Shared/Card';

const FeaturedProperty = () => {
    return (
        <div>
            <div className='text-center space-y-2 mb-10'>
                <h1 className='text-4xl font-bold'>Featured property</h1>
                <p>Leo morbi faucibus mattis pharetra tellus velit ultricies duis rhoncus</p>
            </div>
            <Card></Card>
        </div>
    )
}

export default FeaturedProperty