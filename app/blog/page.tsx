import { posts } from '@/.velite'
import { sortPosts } from "@/lib/utils";
import { PostItem } from '@/components/post-item';

const BlogPage = async () => {
    const sortedPosts = sortPosts(posts.filter((post) => post.published));
    const displayPosts = sortedPosts;
    return (
        <div className="container py-6 lg:py-10">
            <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
                <div className="flex-1 space-y-4">
                    <h1 className="inline-block font-black text-4xl lg:text-5xl">Blog</h1>
                    <p className="text-xl text-muted-foreground">
                        My personal site :)
                    </p>
                </div>
            </div>
            <hr className="mt-8" />
            {displayPosts?.length > 0 ? (
                <ul>
                    {displayPosts.map((post) => {
                        const { slug, date, title, description } = post;
                        return (
                            <li key={slug}>
                                <PostItem
                                    slug={slug}
                                    date={date}
                                    title={title}
                                    description={description}
                                />
                            </li>
                        );
                    })}
                </ul>
            ) : (
                <p>Nothing to see here yet</p>
            )}
        </div>
    );
}

export default BlogPage;
