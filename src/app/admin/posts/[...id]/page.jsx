"use client";
import React, { useEffect, useState } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { useBlogStore } from '../../../../services/blogService';

export default function PostDetail() {
    const router = useRouter();
    const params = useParams(); // More reliable way to get params
    const { getPost } = useBlogStore();

    // Directly access ID from params
    const [postId, setPostId] = useState(() => {
        try {
            return parseInt(params.id);
        } catch {
            return null;
        }
    });

    // Simplified effect for ID handling
    useEffect(() => {
        if (!postId && params.id) {
            setPostId(parseInt(params.id));
        }
    }, [params.id, postId]);

    const post = postId ? getPost(postId) : null;

    if (!post) {
        return (
            <div className="bg-gray-100 min-h-screen p-6 flex items-center justify-center">
                <div className="bg-white rounded-lg shadow-md p-8 text-center">
                    <h1 className="text-2xl font-bold text-red-600 mb-4">Post Not Found</h1>
                    <p className="text-gray-600 mb-6">The post you're looking for doesn't exist or has been removed.</p>
                    <button
                        onClick={() => router.push('/admin/posts')}
                        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
                    >
                        Back to Posts
                    </button>
                </div>
            </div>
        );
    }

    // Memoized content formatting
    const formattedContent = React.useMemo(() => 
        post.content.split('\n\n').map((paragraph, index) => (
            <p key={index} className="mb-4">{paragraph}</p>
        )),
        [post.content]
    );

    return (
        <div className="bg-gray-100 min-h-screen p-6">
            <header className="bg-white rounded-lg shadow-md p-4 mb-6 flex justify-between items-center">
                <div className="flex items-center gap-4">
                    <h1 className="text-2xl font-bold text-red-600">IVS Alliance</h1>
                    <span className="text-gray-600">Post Detail</span>
                </div>
            </header>

            <main className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-8">
                <section className="mb-6">
                    <div className="flex justify-between items-start gap-4">
                        <h2 className="text-3xl font-bold text-blue-900 mb-3">{post.title}</h2>
                        <span className={`badge ${post.status === "Published" ? 
                            "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"}`}>
                            {post.status}
                        </span>
                    </div>
                    
                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-6">
                        <time>{post.date}</time>
                        <span>By {post.author}</span>
                        <span>{post.readTime} read</span>
                        <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                            {post.category}
                        </span>
                    </div>
                </section>

                <article className="prose max-w-none text-gray-800">
                    {formattedContent}
                </article>

                <footer className="mt-8 pt-6 border-t border-gray-200">
                    <button
                        onClick={() => router.push('/admin/posts')}
                        className="text-blue-600 hover:text-blue-800 flex items-center gap-2 transition-colors"
                    >
                        <span>←</span>
                        <span>Back to posts</span>
                    </button>
                </footer>
            </main>
        </div>
    );
}