// app/admin/posts/page.js
"use client";


import React from 'react';
import { useRouter } from 'next/navigation';
import { useBlogStore } from '../../../services/blogService';

export default function Posts() {
    const router = useRouter();
    const { posts } = useBlogStore();

    // Filter to only show published posts
    const publishedPosts = posts.filter(post => post.status === "Published");



    const viewPost = (postId) => {
        router.push(`/admin/posts/${postId}`);
    };

    return (
        <div className="bg-gray-100 min-h-screen p-6">
            {/* Header */}
            <header className="bg-white rounded-lg shadow-md p-4 mb-6 flex justify-between items-center">
                <div className="flex items-center space-x-4">
                    <div className="text-2xl font-bold text-red-600">IVS Alliance</div>
                    <div className="text-gray-600">Posts Page</div>
                </div>

            </header>

            {/* Main Content */}
            <div className="max-w-4xl mx-auto">
                <h1 className="text-2xl font-bold text-blue-900 mb-6">All Blog Posts</h1>

                {publishedPosts.length === 0 ? (
                    <div className="text-center py-10">
                        <div className="text-gray-600">No published posts available.</div>
                    </div>
                ) : (
                    <div className="space-y-6">
                        {publishedPosts.map(post => (
                            <div
                                key={post.id}
                                className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow cursor-pointer"
                                onClick={() => viewPost(post.id)}
                            >
                                <div className="flex justify-between items-start mb-3">
                                    <h2 className="text-xl font-bold text-blue-900">{post.title}</h2>
                                    <span className="text-xs font-medium px-2 py-1 rounded-full bg-green-100 text-green-800">
                                        {post.status}
                                    </span>
                                </div>

                                <div className="flex items-center text-sm text-gray-600 mb-3 space-x-4">
                                    <div>{post.date}</div>
                                    <div>By {post.author}</div>
                                    <div>{post.readTime} read</div>
                                    <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                                        {post.category}
                                    </span>
                                </div>

                                <p className="text-gray-700 mb-4 line-clamp-3">
                                    {post.content}
                                </p>

                                <div className="text-blue-600 text-sm font-medium">
                                    Read more →
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}