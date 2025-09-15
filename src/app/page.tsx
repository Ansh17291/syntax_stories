import BlogCard from "@/components/BlogCard";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import HeroStatement from '@/components/heroStatement';

export default function Home() {
  return (
    <header >
      <main >
        <Navbar />
        <HeroStatement />
        <div className="mt-[50vh]">
          <BlogCard
            title="React Tailwind Newsletter Component"
            shortDescription="Learn how to build a responsive newsletter component using React and Tailwind CSS."
            cover="https://plus.unsplash.com/premium_photo-1673984261110-d1d931e062c0?q=80"
            slug="react-tailwind-newsletter-component"
            publishDate="2024-07-14"
            estimatedTimeToRead="5 min read" tags={undefined} />
        </div>
{/* 
        <Footer>
          
        </Footer> */}

      </main>


    </header>
  );
}
