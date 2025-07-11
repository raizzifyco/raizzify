// app/blog/page.tsx or app/(blog)/page.tsx
import Link from "next/link";
import { client } from "@/lib/sanity"; // ✅ Make sure this is properly set up
import Image from "next/image";
interface BlogPost {
  _id: string;
  title: string;
  slug: { current: string };
  publishedAt: string;
  mainImage?: {
    asset: {
      url: string;
    };
  };
}

export const revalidate = 60; // ✅ Optional: ISR for 60 seconds (if using Next.js App Router)

export default async function BlogPage() {
  // ✅ GROQ Query: Fetch all blog posts with required fields
  const query = `
    *[
      _type == "post" &&
      defined(slug.current) &&
      publishedAt != null &&
      publishedAt != ""
    ] | order(publishedAt desc){
      _id,
      title,
      slug,
      publishedAt,
      mainImage {
        asset->{
          url
        }
      }
    }
  `;

  let posts: BlogPost[] = [];

  try {
    posts = await client.fetch(query);
  } catch (error) {
    console.error("Error fetching posts from Sanity:", error);
  }

  return (
  <div className="min-h-screen bg-[#f1f3f6] py-16 px-6 sm:px-10">
    <div className="max-w-7xl mx-auto">
      <p className="text-center font-extrabold mb-10 text-gray-500 max-w-3xl mx-auto mt-2 text-base sm:text-lg">
        Expert insights, product updates, and stories from the Raizzify journey.
      </p>

      {posts.length === 0 ? (
        <p className="text-center text-gray-500">No blog posts available.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <Link
              key={post._id}
              href={`/blog/${post.slug.current}`}
              className="block"
            >
              <div className="group bg-[#f1f3f6] rounded-3xl shadow-[inset_6px_6px_14px_#d1d9e6,inset_-6px_-6px_14px_#fff] hover:shadow-[6px_6px_12px_#d1d9e6,-6px_-6px_12px_#fff] transition-all duration-300 overflow-hidden">
                {post.mainImage?.asset?.url && (
                 <Image
  src={post.mainImage.asset.url}
  alt={post.title}
  width={600}
  height={400}
  className="w-full h-[200px] object-cover object-center"
/>

                )}
                <div className="p-5">
                  <h2 className="text-xl font-semibold text-gray-800 group-hover:text-indigo-700 transition-colors duration-200">
                    {post.title}
                  </h2>
                  <p className="mt-2 text-sm text-gray-500">
                    📅{" "}
                    {new Date(post.publishedAt).toLocaleDateString("en-IN", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  </div>
);

}
