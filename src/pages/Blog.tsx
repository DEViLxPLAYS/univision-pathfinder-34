import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, Calendar, User, ArrowRight, Eye, Filter } from "lucide-react";

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const blogPosts = [
    {
      id: 1,
      title: "Complete Guide to Studying in Canada 2024",
      excerpt: "Everything you need to know about studying in Canada, from university selection to visa requirements and living costs.",
      content: "Canada continues to be one of the top destinations for international students...",
      category: "Study Destinations",
      author: "Dr. Sarah Johnson",
      publishDate: "2024-01-15",
      readTime: "8 min read",
      views: 1250,
      image: "🇨🇦",
      tags: ["Canada", "Universities", "Visa", "Cost of Living"]
    },
    {
      id: 2,
      title: "IELTS vs TOEFL: Which Test Should You Take?",
      excerpt: "Comprehensive comparison of IELTS and TOEFL tests to help you choose the right English proficiency exam.",
      content: "When applying to international universities, English proficiency tests are crucial...",
      category: "Test Preparation",
      author: "Prof. Michael Chen",
      publishDate: "2024-01-12",
      readTime: "6 min read",
      views: 890,
      image: "📝",
      tags: ["IELTS", "TOEFL", "English Tests", "Preparation"]
    },
    {
      id: 3,
      title: "Top 10 Scholarships for International Students 2024",
      excerpt: "Discover the best scholarship opportunities available for international students pursuing higher education abroad.",
      content: "Scholarships can significantly reduce the financial burden of studying abroad...",
      category: "Scholarships",
      author: "Emma Wilson",
      publishDate: "2024-01-10",
      readTime: "10 min read",
      views: 2100,
      image: "🎓",
      tags: ["Scholarships", "Financial Aid", "Funding", "International Students"]
    },
    {
      id: 4,
      title: "Student Visa Interview: Tips for Success",
      excerpt: "Expert tips and strategies to ace your student visa interview and increase your approval chances.",
      content: "The visa interview is a crucial step in your study abroad journey...",
      category: "Visa Guidance",
      author: "James Rodriguez",
      publishDate: "2024-01-08",
      readTime: "7 min read",
      views: 1450,
      image: "🛂",
      tags: ["Visa Interview", "Student Visa", "Immigration", "Tips"]
    },
    {
      id: 5,
      title: "Best Universities in Germany for Engineering",
      excerpt: "Explore top German universities offering world-class engineering programs with excellent career prospects.",
      content: "Germany is renowned for its engineering excellence and innovative technology...",
      category: "Study Destinations",
      author: "Dr. Klaus Mueller",
      publishDate: "2024-01-05",
      readTime: "9 min read",
      views: 980,
      image: "🇩🇪",
      tags: ["Germany", "Engineering", "Universities", "Technology"]
    },
    {
      id: 6,
      title: "Cost of Living Guide: UK vs USA vs Canada",
      excerpt: "Detailed comparison of living costs in top study abroad destinations to help you budget effectively.",
      content: "Understanding the cost of living is crucial for international students...",
      category: "Finance & Budget",
      author: "Rachel Thompson",
      publishDate: "2024-01-03",
      readTime: "12 min read",
      views: 1780,
      image: "💰",
      tags: ["Cost of Living", "Budget", "UK", "USA", "Canada"]
    },
    {
      id: 7,
      title: "How to Write a Winning Statement of Purpose",
      excerpt: "Step-by-step guide to crafting a compelling statement of purpose that gets you admitted to your dream university.",
      content: "Your statement of purpose is often the deciding factor in university admissions...",
      category: "Application Tips",
      author: "Dr. Lisa Anderson",
      publishDate: "2023-12-28",
      readTime: "11 min read",
      views: 2350,
      image: "✍️",
      tags: ["SOP", "Application", "Writing", "Admissions"]
    },
    {
      id: 8,
      title: "Post-Study Work Opportunities in Australia",
      excerpt: "Complete guide to work rights and career opportunities for international students in Australia after graduation.",
      content: "Australia offers excellent post-study work opportunities for international graduates...",
      category: "Career Guidance",
      author: "David Kim",
      publishDate: "2023-12-25",
      readTime: "8 min read",
      views: 1120,
      image: "🇦🇺",
      tags: ["Australia", "Work Rights", "Career", "Post-Study"]
    }
  ];

  const categories = ["all", "Study Destinations", "Test Preparation", "Scholarships", "Visa Guidance", "Finance & Budget", "Application Tips", "Career Guidance"];

  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === "all" || post.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  const featuredPost = blogPosts[0]; // Most recent post as featured

  return (
    <div className="min-h-screen py-8">
      <div className="container px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Study Abroad Blog</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Latest insights, tips, and guides to help you navigate your study abroad journey successfully.
          </p>
        </div>

        {/* Featured Post */}
        <Card className="border-none shadow-lg mb-12 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="bg-gradient-hero flex items-center justify-center p-12">
              <span className="text-8xl">{featuredPost.image}</span>
            </div>
            <div className="p-8">
              <Badge className="mb-4">{featuredPost.category}</Badge>
              <h2 className="text-2xl font-bold mb-4">{featuredPost.title}</h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {featuredPost.excerpt}
              </p>
              <div className="flex items-center space-x-4 mb-6 text-sm text-muted-foreground">
                <div className="flex items-center space-x-1">
                  <User className="h-4 w-4" />
                  <span>{featuredPost.author}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Calendar className="h-4 w-4" />
                  <span>{new Date(featuredPost.publishDate).toLocaleDateString()}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Eye className="h-4 w-4" />
                  <span>{featuredPost.views} views</span>
                </div>
              </div>
              <Button asChild>
                <Link to={`/blog/${featuredPost.id}`}>
                  Read Full Article
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </Card>

        {/* Search and Filters */}
        <div className="bg-card rounded-lg p-6 mb-8 border shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="md:col-span-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  placeholder="Search articles, topics, tags..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger>
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((category) => (
                  <SelectItem key={category} value={category}>
                    {category === "all" ? "All Categories" : category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Results Count */}
        <div className="flex items-center justify-between mb-6">
          <p className="text-muted-foreground">
            Showing {filteredPosts.length} of {blogPosts.length} articles
          </p>
          <Button variant="outline" size="sm">
            <Filter className="mr-2 h-4 w-4" />
            More Filters
          </Button>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPosts.slice(1).map((post) => (
            <Card key={post.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="outline">{post.category}</Badge>
                  <span className="text-4xl">{post.image}</span>
                </div>
                <CardTitle className="text-lg line-clamp-2">{post.title}</CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <CardDescription className="line-clamp-3">
                  {post.excerpt}
                </CardDescription>

                <div className="flex flex-wrap gap-1">
                  {post.tags.slice(0, 3).map((tag, index) => (
                    <Badge key={index} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <div className="flex items-center space-x-1">
                    <Calendar className="h-4 w-4" />
                    <span>{new Date(post.publishDate).toLocaleDateString()}</span>
                  </div>
                  <span>{post.readTime}</span>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                    <Eye className="h-4 w-4" />
                    <span>{post.views} views</span>
                  </div>
                  <Button variant="ghost" size="sm" asChild>
                    <Link to={`/blog/${post.id}`}>
                      Read More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-xl text-muted-foreground mb-4">No articles found matching your criteria.</p>
            <Button onClick={() => {
              setSearchTerm("");
              setSelectedCategory("all");
            }}>
              Clear Filters
            </Button>
          </div>
        )}

        {/* Newsletter Subscription */}
        <Card className="border-none shadow-lg mt-16 bg-gradient-card">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Subscribe to our newsletter and get the latest study abroad tips, university updates, and scholarship opportunities delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input placeholder="Enter your email" className="flex-1" />
              <Button>Subscribe</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Blog;